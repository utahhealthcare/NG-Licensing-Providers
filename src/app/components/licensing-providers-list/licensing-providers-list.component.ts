import { Component } from '@angular/core';
import { ProvidersBySpecialtyComponent } from '../providers-by-specialty/providers-by-specialty.component';

@Component({
  selector: 'app-licensing-providers-list',
  standalone: true,
  imports: [ProvidersBySpecialtyComponent],
  templateUrl: './licensing-providers-list.component.html'
})
export class LicensingProvidersListComponent {}
