import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' }, // Redirect to overview or any other route
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'overview', loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)}
];
