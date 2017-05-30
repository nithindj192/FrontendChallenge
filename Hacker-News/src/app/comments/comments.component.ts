import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../stories/stories.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  inputs:[`comments`]
})
export class CommentsComponent implements OnInit {
  comments=[];
  item;
constructor(private _service : StoriesService,private router : ActivatedRoute){}
ngOnInit(){
  let id=this.router.snapshot.params['id'];
  this._service.getItems(id).subscribe(res=>{
    this.item=res;
    for(let kid of this.item.kids){
 this._service.getItems(kid)
 .subscribe(res=> this.comments.push(res));
  }}
    );

}

}
