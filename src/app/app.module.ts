import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event/event-detail.component';
import { PostsComponent } from './posts/posts.component';
import { TicketComponent } from './event/ticket.component';
import { AppRoutingModule } from './app.routing';

import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    EventDetailComponent,
    TicketComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }