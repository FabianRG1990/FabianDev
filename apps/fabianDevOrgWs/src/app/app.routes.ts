import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@fabian-dev-org-ws/dashboard').then((m) => m.dashboardRoutes),
  },
];
