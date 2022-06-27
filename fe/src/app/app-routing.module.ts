import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BodyComponent } from './body/body.component';
import { BooklistComponent } from './booklist/booklist.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { LoginbodyComponent } from './loginbody/loginbody.component';

const routes: Routes = [
  {
    path: '',component:UserComponent
    ,
    children:[{path: '',component:SignUpComponent},
              {path: 'login',component:SignInComponent}]
  },
  {
    path:'loginbody',component:LoginbodyComponent,
    children:[{path: '',component:BodyComponent},
    {path: 'books',component:BooklistComponent},
    {path: 'addbook',component:AddBookComponent
    }]
  },
  {
    path: 'login',component:SignInComponent
  },
  {
    path: 'signup',component:SignUpComponent
  },
  {
    path: 'logout',component:SignUpComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
