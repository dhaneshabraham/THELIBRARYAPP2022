import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BodyComponent } from './body/body.component';
import { BooklistComponent } from './booklist/booklist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',component:BodyComponent
  },
  {
    path: 'addbook',component:AddBookComponent
  },
  {
    path: 'books',component:BooklistComponent
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'signup',component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
