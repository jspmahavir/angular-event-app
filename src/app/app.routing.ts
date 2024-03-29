import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event/event-detail.component';
import { TicketComponent } from './event/ticket.component';
import { PostsComponent } from './posts/posts.component';

const AppRoutes: Routes = [
    { 
      path: '', 
      component: HomeComponent
    },
    { 
      path: 'signup', 
      component: SignupFormComponent
    },
    { 
      path: 'events', 
      component: EventComponent
    },
    { 
      path: 'posts', 
      component: PostsComponent
    },
    { 
      path: 'event-detail/:id', 
      component: EventDetailComponent
    },
    { 
      path: 'ticket-redeem', 
      component: TicketComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(AppRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: [],
    declarations: []
  })
  export class AppRoutingModule { }