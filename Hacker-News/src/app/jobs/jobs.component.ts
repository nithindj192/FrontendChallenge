import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../stories/stories.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
items=[];
  constructor(private _storiesService : StoriesService) { }

  ngOnInit() {
   this._storiesService.getStories("job").
   subscribe(res=>{
     for(let item of res){
     this._storiesService.getItems(item)
     .subscribe(response=>this.items.push(response));}
  });
}
}
