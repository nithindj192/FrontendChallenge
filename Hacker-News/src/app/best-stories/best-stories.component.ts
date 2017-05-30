import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../stories/stories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-stories',
  templateUrl: './best-stories.component.html',
  styleUrls: ['./best-stories.component.css']
})
export class BestStoriesComponent implements OnInit {
items=[];
  constructor(private _storiesService : StoriesService,private router:Router) { }

  ngOnInit() {
   this._storiesService.getStories("best").
   subscribe(res=>{
     for(let item of res){
     this._storiesService.getItems(item)
     .subscribe(response=>this.items.push(response));}
  });
}
getComments(item){
  this.router.navigate(['/comments',item.id]);
}
}
