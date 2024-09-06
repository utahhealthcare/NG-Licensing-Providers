import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LicensingProvidersListComponent } from "./components/licensing-providers-list/licensing-providers-list.component";

@Component({
  selector: 'app-licensing-providers',
  standalone: true,
  imports: [RouterOutlet, LicensingProvidersListComponent],
  template: '<app-licensing-providers-list></app-licensing-providers-list>'
})
export class AppComponent {

}
