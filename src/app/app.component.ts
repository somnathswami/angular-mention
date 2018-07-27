import { Component } from '@angular/core';

import { COMMON_NAMES } from './common-names';

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: string[] = COMMON_NAMES;
  customItems: any[] = [
      {'label': 'somnath', 'avtar': 'someavtar'},
      {'label': 'abc', 'avtar': 'someavtar'},
      {'label': 'pqr', 'avtar': 'someavtar'},
      {'label': 'zokavalskia', 'avtar': 'someavtar'},
      {'label': 'dell', 'avtar': 'someavtar'},
      {'label': 'lenevo', 'avtar': 'someavtar'},
      {'label': 'somnath1', 'avtar': 'someavtar'},
      {'label': 'abc2', 'avtar': 'someavtar'},
      {'label': 'pqr3', 'avtar': 'someavtar'},
      {'label': 'zokavalskia4', 'avtar': 'someavtar'},
      {'label': 'dell5', 'avtar': 'someavtar'},
      {'label': 'lenevo6', 'avtar': 'someavtar'}
    ];
}
