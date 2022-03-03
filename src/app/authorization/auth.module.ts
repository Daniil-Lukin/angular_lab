import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    PasswordRecoveryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
