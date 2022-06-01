import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { SiteUpperComponent } from './site-upper/site-upper.component';
import { SiteLowerComponent } from './site-lower/site-lower.component';
import { InputcompComponent } from './inputcomp/inputcomp.component';
import { Inputcomp2Component } from './inputcomp2/inputcomp2.component';
import { MapComponent } from './map/map.component';
import { MarkerService } from './marker.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { Map1Component } from './map1/map1.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    SiteUpperComponent,
    SiteLowerComponent,
    InputcompComponent,
    Inputcomp2Component,
    MapComponent,
    Map1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
