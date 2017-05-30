import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { CommentsComponent } from './comments/comments.component';
import { NewstoriesComponent } from './newstories/newstories.component';
import { BestStoriesComponent } from './best-stories/best-stories.component';
import { AskComponent } from './ask/ask.component';
import { ShowComponent } from './show/show.component';
import { JobsComponent } from './jobs/jobs.component';
import { StoriesService } from './stories/stories.service';
import {Ng2PaginationModule} from '../../ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    CommentsComponent,
    NewstoriesComponent,
    BestStoriesComponent,
    AskComponent,
    ShowComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      {path:'',component:StoriesComponent},
      {path:'stories', component:StoriesComponent},
      {path:'comments/:id',component:CommentsComponent},
      {path:'best',component:BestStoriesComponent},
      {path:'new',component:NewstoriesComponent},
      {path:'ask',component:AskComponent},
      {path:'show',component:ShowComponent},
      {path:'jobs',component:JobsComponent}
    ]),
    Ng2PaginationModule
  ],
  providers: [StoriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
