import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SharedComponent } from 'libs/frontend/shared/src/lib/shared.component';

@Component({
  standalone: true,
  imports: [ RouterModule, SharedComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fabianDevOrgWs';
}
