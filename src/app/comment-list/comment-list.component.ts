import { Component, OnInit,Input,Output } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  user:any;
  comment:any;
  replyTo:any;

  constructor(private api:ApiService) { }
  @Input('rowData') replies:any;
  @Output()  replyChild:any;

  ngOnInit(): void {
    this.replyTo=null
  }
  setReplyTo(data){
    this.replyTo=data;
  }
  //getComments(data){}
  getComments(commentId: any): void {
    
    if (commentId) {
      let url = `http://localhost:4000/api/v1/comments/reply/${commentId}`;
      this.api.get(url).subscribe((res: any) => {        
    
        if (res && res.length) {
      
          this.replies = res;
        }
      }, error => {
       
      })
    }
  }
  receivePostStatus(data){
    console.log('gotu',data)
    this.getComments(data.parentId);
  }
}
