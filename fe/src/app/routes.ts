import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { LibraryBodyComponent } from './library-body/library-body.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DispbooksComponent } from './dispbooks/dispbooks.component';
export const appRoutes: Routes = [
    {
        path: 'signup', component: SignUpComponent
        // children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: SignInComponent
        // children: [{ path: '', component: SignInComponent }]
    },
    {
        // path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
        path: 'loginbody', component: LoginBodyComponent,canActivate:[AuthGuard]
    },
    {
        path: '',component:LibraryBodyComponent
    },
    {
        path: 'addbook',component:AddbookComponent
    },
    {
        path: 'books',component:DispbooksComponent
    }
];
