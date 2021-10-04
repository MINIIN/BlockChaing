import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
// import { LoginComponent } from 'src/app/modules/login/login.component'
import { HomeComponent } from 'src/app/modules/home/home.component'
import { RegisterComponent } from 'src/app/modules/register/register.component'

const routes: Routes = [
  // เข้า root path ไปหน้า home
  { path: '', component: RegisterComponent },
  
  { path: 'home', component: HomeComponent },

  // เข้าพาทมั่วๆ ให้ไปหน้าโฮม
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
