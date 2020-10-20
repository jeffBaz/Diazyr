import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AkoyawaComponent } from './akoyawa/akoyawa.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [ {
      path: '',
      component: HomeComponent
      // canActivate: [LoggedGuard]
    },{
      path: 'login',
      component: LoginComponent
      // canActivate: [LoggedGuard]
    }]
  }, {
    path: 'akoyawa',
    component: AkoyawaComponent
    // canActivate: [LoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
