import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../stories/stories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
items=[];
  constructor(private _storiesService : StoriesService,private router:Router) { }

  ngOnInit() {
   this._storiesService.getStories("show").
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
