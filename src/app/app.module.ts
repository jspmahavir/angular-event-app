import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event/event-detail.component';
import { PostsComponent } from './posts/posts.component';
import { TicketComponent } from './event/ticket.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AppRoutingModule } from './app.routing';

import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    EventDetailComponent,
    TicketComponent,
    PostsComponent,
	  SignupFormComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }