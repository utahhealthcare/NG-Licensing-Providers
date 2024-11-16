import { Component, Input, OnInit } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { License, Provider } from '../../models/doctor.model';

@Component({
  selector: 'app-providers-by-specialty',
  standalone: true,
  templateUrl: './providers-by-specialty.component.html'
})
export class ProvidersBySpecialtyComponent implements OnInit {
  @Input() specialty!: string;
  @Input() title!: string;
  @Input() customClass: string = ''; // Initialize default value

  providers: Provider[] = [];
  hasLicenses = true;
  errorMessage: string = '';

  constructor(private providersService: ProvidersService) {}

  ngOnInit(): void {
    if (this.specialty) {
      this.getProvidersBySpecialty(this.specialty);
    }
  }

  getProvidersBySpecialty(specialty: string): void {
    this.providersService.getProviders(specialty)
      .subscribe({
        next: (data: Provider[]) => {
          // Filter licenses with description "State License"
          this.providers = data.map((provider: Provider) => ({
            ...provider,
            licenses: provider.licenses.filter((license: License) => license.description === 'State License')
          }));
  
          this.checkProviderLicenses();
        },
        error: (error) => this.handleError(error)
      });
  }

  checkProviderLicenses(): void {
    const providersWithLicenses = this.providers.filter(provider => provider.licenses.length > 0).length;
    
    if (providersWithLicenses === 0) {
      this.hasLicenses = false;
      console.error(`No providers in "${this.title}" have any licenses in the data.`);
    }
  }

  handleError(error: any): void {
    this.errorMessage = 'An error occurred while fetching providers';
    console.error(error); // Log error for debugging
  }
}