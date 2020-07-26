import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent implements OnInit {

  constructor(private api: ApiService, private post: PostService) { }
  message: any;

  ngOnInit(): void {

  }
  @Input() comment: any;
  @Input('user') user: any;
  @Input('messageType') type: any;
  @Output() addedPost=new EventEmitter<any>();
  postComment() {
    if (this.type == 'reply' && this.comment.commentId) {
      const url = `http://localhost:4000/api/v1/comments/${this.comment.commentId}/replies`;
      const data = {
        parentId: this.comment.commentId,
        message: this.message
      }

      if (!this.user) {
        const randomuser = `user_${new Date().valueOf()}`;
        localStorage.setItem('commented_by', randomuser)
        Object.assign(data, { user: randomuser });
      }
      this.api.post(url, data).subscribe((res: any) => {
        this.addedPost.emit({refresh:true})
      }, (error) => {
        //handle error here
        console.log(error)
      })

    }
    else if (this.type == 'reply' && this.comment.messageIds) {
      const url = `http://localhost:4000/api/v1/comments/${this.comment.messageIds}/replies`;
      const data = {
        parentId: this.comment.messageIds,
        message: this.message
      }
      //user:this.user
      if (!this.user) {
        const randomuser = `user_${new Date().valueOf()}`;
        localStorage.setItem('commented_by', randomuser)
        Object.assign(data, { user: randomuser });
      }
      this.api.post(url, data).subscribe((res: any) => {
        this.addedPost.emit({refresh:true,data})
      }, (error) => {
        //handle error here
        console.log(error)
      })

    }
    else if (this.type = "post") {

    }

  }


}
