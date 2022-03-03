import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth-component/auth.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path:'login',
    component: AuthComponent,
  },
  {
    path:'signIn',
    component: RegistrationComponent,
  },
  {
    path:'recovery',
    component: PasswordRecoveryComponent,
  },
  {
    path:'',
    component: AuthComponent,
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
