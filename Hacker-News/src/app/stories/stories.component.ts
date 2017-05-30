import { Component, OnInit } from '@angular/core';
import { Item } from './item.component';
import { StoriesService } from './stories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
items=[];
pager: any={};
pagedItems=[];
comments=[];
  constructor(private _storiesService : StoriesService,private router:Router) { }

  ngOnInit() {
   this._storiesService.getStories("default")
   .subscribe(res=>{
     for(let item of res){
     this._storiesService.getItems(item)
     .subscribe(response=>this.items.push(response));
    }

      });
}

getComments(item){
  this.router.navigate(['/comments',item.id]);
}
}


