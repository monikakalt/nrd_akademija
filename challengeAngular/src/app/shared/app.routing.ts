import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component'
import { AboutComponent } from '../components/about/about.component'
import { ChallengeComponent } from '../components/challenge/challenge.component'

@NgModule({
  imports: [
      RouterModule.forRoot([
          { path: '' , component: HomeComponent},
          { path: 'login' , component: LoginComponent},
          { path: 'register' , component: RegisterComponent},
          { path: 'about' , component: AboutComponent},
          { path: 'challenge' , component: ChallengeComponent},

          // otherwise redirect to home
          { path: '**', redirectTo: '' }
      ])
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}
