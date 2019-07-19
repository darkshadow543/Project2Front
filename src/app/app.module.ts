import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ChanOwnComponent } from './components/chan-own/chan-own.component';
import { ChanFormComponent } from './components/chan-form/chan-form.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAllChannelsComponent } from './components/view-all-channels/view-all-channels.component';
import { ViewerSpecificChannelComponent } from './components/viewer-specific-channel/viewer-specific-channel.component';
import { OwnerSpecificChannelComponent } from './components/owner-specific-channel/owner-specific-channel.component';
import { ViewerSpecificVideoComponent } from './components/viewer-specific-video/viewer-specific-video.component';
import { OwnerSpecificVideoComponent } from './components/owner-specific-video/owner-specific-video.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { MakeChannelComponent } from './components/make-channel/make-channel.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChanOwnComponent,
    ChanFormComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    RegisterUserComponent,
    ListusersComponent,
    HomeComponent,
    ViewAllChannelsComponent,
    ViewerSpecificChannelComponent,
    OwnerSpecificChannelComponent,
    ViewerSpecificVideoComponent,
    OwnerSpecificVideoComponent,
    UploadVideoComponent,
    MakeChannelComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
