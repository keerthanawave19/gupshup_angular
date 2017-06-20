import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './approuting.module';
import {RightPanelComponent} from './rightpanel/rightpanel.component';
//import { FlexLayoutModule } from "@angular/flex-layout";
import {LeftPanelComponent} from './leftpanel/leftpanel.component';
import {PostComponent} from './post/post.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import { MaterialModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component'
import { Routes,RouterModule} from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MaterialModule } from '@angular/material';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';

import { CircleListComponent } from './circlelist/circlelist.component';
import { UserListComponent } from './userlist/userlist.component';

import { UserDashboardComponent } from './userdashboard/userdashboard.component';


import { AppComponent } from './app.component';

import { CircleService} from './service/circle.service';


//import { CircleInboxComponent } from './circleinbox/circleinbox.component';



@NgModule({
  declarations: [
    AppComponent,
    CircleListComponent,
    UserListComponent,
    LeftPanelComponent,
    PostComponent,
    SearchBarComponent,
    UserDashboardComponent,
    RightPanelComponent,
    MenuComponent
    
 
    
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  	HttpModule,
  	BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MdButtonModule,
     MdCardModule, 
     MdMenuModule, 
     MdToolbarModule, 
     MdIconModule, 
     MdInputModule,
     AppRoutingModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [ CircleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
