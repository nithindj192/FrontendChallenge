import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../stories/stories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newstories',
  templateUrl: './newstories.component.html',
  styleUrls: ['./newstories.component.css']
})
export class NewstoriesComponent implements OnInit {
items=[];
  constructor(private _storiesService : StoriesService,private router:Router) { }

  ngOnInit() {
   this._storiesService.getStories("new").
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
