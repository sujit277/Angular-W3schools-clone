import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {path:'content',component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
