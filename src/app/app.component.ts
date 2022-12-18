import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Buscador de Pokemóns</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-project';
}
