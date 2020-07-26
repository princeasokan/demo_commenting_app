import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PostComponent } from './post/post.component';
import { PostMessageComponent } from './post-message/post-message.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentleveltwoComponent } from './commentleveltwo/commentleveltwo.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
    PostComponent,
    PostMessageComponent,
    CommentListComponent,
    CommentleveltwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
