import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Pages/auth/auth.guard';

const routes: Routes = [
  /* cosi'all'avvio mi manda direttamente all'home */
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./Pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'Home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
