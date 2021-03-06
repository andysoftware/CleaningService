import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule,AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { CleanerComponent } from './cleaner/cleaner.component';
import { CustomerComponent } from './customer/customer.component';
import { RequestComponent } from './request/request.component';
import {AboutComponent} from './about/about.component';
import {MainMenuBarComponent} from './main-menu-bar/main-menu-bar.component';
import {MainComponent} from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CleanerComponent,
    CustomerComponent,
    RequestComponent,
    MainMenuBarComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
   
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
