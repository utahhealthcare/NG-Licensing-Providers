import { Component, Input } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Provider } from '../../models/doctor.model';

@Component({
  selector: 'app-providers-by-specialty',
  standalone: true,
  templateUrl: './providers-by-specialty.component.html'
})
export class ProvidersBySpecialtyComponent {
  @Input() specialty!: string;

  providers: Provider[] = [];
  filteredProviders: Provider[] = [];

  constructor(private providersService: ProvidersService) {}

  ngOnInit(): void {
    // Fetch providers from the service
    this.providersService.getProviders().subscribe((data) => {
      this.providers = data;
      
      // Filter providers based on the specialtyId
      this.filteredProviders = this.providers.filter(provider => 
        provider.specialtyList.some(specialty => specialty.specialtyId === this.specialty)
      );

      console.log(this.filteredProviders); // Output filtered providers to the console for debugging
    });
  }
}