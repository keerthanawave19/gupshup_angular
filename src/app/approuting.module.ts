import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CircleService} from './service/circle.service';
import { Routes,RouterModule} from '@angular/router';
import { CircleInboxComponent } from './circleinbox/circleinbox.component';
import { UserInboxComponent } from './userinbox/userinbox.component';
import { CreateCircle } from './createcircle/createcircle.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PostComponent} from './post/post.component';
import { ChatBoxComponent } from './chatbox/chatbox.component';
import { MaterialModule } from '@angular/material';
import { MessageComponent } from './message/message.component'

const routes:Routes=[{path:'',component: UserInboxComponent},
{path:'circleinbox',component: CircleInboxComponent},
 {path:'createcircle',component: CreateCircle},
 {path:'circleinbox/:circle',component: CircleInboxComponent},
 {path:'chatbox/:name',component: ChatBoxComponent}
];

@NgModule({
	declarations: [
	CircleInboxComponent,
     ChatBoxComponent,
     CreateCircle,
     UserInboxComponent,
     PostComponent,
     MessageComponent

	],
    
	  imports: [ BrowserModule,
	  MaterialModule,
	  ReactiveFormsModule,
	  RouterModule.forRoot(routes)],
	  providers: [ CircleService ],
	  exports: [RouterModule]
	  
})

export class AppRoutingModule
{}