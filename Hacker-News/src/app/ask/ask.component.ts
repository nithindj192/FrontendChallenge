import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../stories/stories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
items=[];
  constructor(private _storiesService : StoriesService,private router:Router) { }

  ngOnInit() {
   this._storiesService.getStories("ask").
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
