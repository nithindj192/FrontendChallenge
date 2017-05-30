import { Injectable } from '@angular/core';
import { Item } from './item.component';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class StoriesService {
storiesURL="https://hacker-news.firebaseio.com/v0/topstories.json";
newStoriesURL="https://hacker-news.firebaseio.com/v0/newstories.json";
bestStories="https://hacker-news.firebaseio.com/v0/beststories.json";
askStories="https://hacker-news.firebaseio.com/v0/askstories.json";
showStories="https://hacker-news.firebaseio.com/v0/showstories.json";
jobStories="https://hacker-news.firebaseio.com/v0/jobstories.json";
itemURL="https://hacker-news.firebaseio.com/v0/item/";
URL;
constructor(private http : Http) { }

getStories(type){
  if(type=="default") this.URL=this.storiesURL;
  else if(type=="new") this.URL=this.newStoriesURL;
  else if(type=="best") this.URL=this.bestStories;
  else if(type=="ask") this.URL=this.askStories;
  else if(type=="show") this.URL=this.showStories;
  else if(type=="job") this.URL=this.jobStories;

   return this.http.get(this.URL)
   .map(res => res.json())
   .catch(this._erroHandler); 
  }
_erroHandler(error:Response){
    console.log(error);
    return Observable.throw(error || "Server error")
}
getItems(id){
return this.http.get(this.itemURL+id+".json")
.map(res => res.json() as Item)
.catch(this._erroHandler);
}
}
