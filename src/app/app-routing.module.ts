import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewAllChannelsComponent } from './components/view-all-channels/view-all-channels.component';
import { HomeComponent } from './components/home/home.component';
import { ViewerSpecificChannelComponent } from './components/viewer-specific-channel/viewer-specific-channel.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'register', component:RegisterUserComponent},
  {path:'listusers', component:ListusersComponent},
  {path:'viewuser/:id', component:ViewUserComponent},
  {path:'view-all-channels', component:ViewAllChannelsComponent},
  {path:'logout', component:LoginComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'/viewer-specific-channe/:id', component:ViewerSpecificChannelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
