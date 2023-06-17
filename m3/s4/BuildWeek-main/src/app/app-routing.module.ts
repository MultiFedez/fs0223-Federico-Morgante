import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  /* cosi'all'avvio mi manda direttamente all'home */
  {path: '', redirectTo: 'home', pathMatch:'full'},
  /* faccio una redirect */
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},

 /* gli altri li sposto nelle rotte corrette */

 /* andranno nella rotta madre di auth, diventandone figlie */

/*   { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) }, */

/* andranno nella rotta madre di home, diventandone figlie */

  /* { path: 'add', loadChildren: () => import('./pages/home/add/add.module').then(m => m.AddModule) },
  { path: 'edit', loadChildren: () => import('./pages/home/edit/edit.module').then(m => m.EditModule) },
   { path: 'singleAccomodation', loadChildren: () => import('./pages/home/single-accomodation/single-accomodation.module').then(m => m.SingleAccomodationModule) } */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
