import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  commentsListobj: any = new BehaviorSubject<any>({});

  constructor() { }
  getCommentList() {
    return this.commentsListobj.asObservable();
  }
  setCommentList(comment, type) {
    console.log('got',comment)
    
    if (type == 'level1') {
      // this.commentsListobj['postCommentList']=comment;
      this.commentsListobj.next(Object.assign({}, this.commentsListobj,{"postCommentList":comment}));

    } else if (type == 'level2') {
      // this.commentsListobj['replyList']=comment;
      this.commentsListobj.next(Object.assign({}, this.commentsListobj,{"replyList":comment}));
    }
    console.log(this.commentsListobj)
  }

}
