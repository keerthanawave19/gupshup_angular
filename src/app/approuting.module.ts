import { NgModule } from '@angular/core';

import { CircleService} from './service/circle.service';
import { Routes,RouterModule} from '@angular/router';
import { CircleInboxComponent } from './circleinbox/circleinbox.component';
import { UserInboxComponent } from './userinbox/userinbox.component';
import { CreateCircle } from './createcircle/createcircle.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ChatboxComponent } from './chatbox/chatbox.component';

const routes:Routes=[{path:'',component: UserInboxComponent},
{path:'circleinbox',component: CircleInboxComponent},
{path:'circlememberinbox/:member',component: ChatboxComponent},
 {path:'createcircle',component: CreateCircle}
];

@NgModule({
	declarations: [
	CircleInboxComponent,
     ChatboxComponent,
     CreateCircle,
     UserInboxComponent
	],
    
	  imports: [ ReactiveFormsModule,RouterModule.forRoot(routes),],
	  providers: [ CircleService ],
	  exports: [RouterModule]
})

export class AppRoutingModule
{}