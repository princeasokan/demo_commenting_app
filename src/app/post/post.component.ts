import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  message: any;
  user: any;
  commentList: any[];
  replyList: any[]
  replyTo: any
  enableCommentView: any;
  constructor(private api: ApiService,private post:PostService) { }

  ngOnInit(): void {
    this.user = null;
    this.commentList = [];

    this.replyTo = null
    this.replyList = [];
    this.fetchPost();
    this.enableCommentView = null;
    // this.post.getCommentList().subscribe(data=>{
    //   console.log(data)
    // })

  }
  
  postComment() {
    const url = 'http://localhost:4000/api/v1/comments';
    this.user = localStorage.getItem('commented_by');
    const comments = {
      message: this.message
    }
    
    if (this.user) {
      Object.assign(comments, { user: this.user })
    } else {
      const randomuser = `user_${new Date().valueOf()}`;
      localStorage.setItem('commented_by', randomuser)
      Object.assign(comments, { user: randomuser })
    }
    this.api.post(url, comments).subscribe((res: any) => {      
      this.message = '';
      this.commentList.unshift(res.ops[0])
    }, error => {
      this.message = ''
      
    })
  }
  fetchPost() {
    const url = 'http://localhost:4000/api/v1/comments'; 
    this.api.get(url).subscribe((res: any) => {      
      this.message = ''
      this.commentList = res;
    }, error => {
      this.message = ''
      console.log(error)
    })
  }
  getComments(commentId: any): void {
    this.replyList = []
    this.enableCommentView = null
    if (commentId) {
      let url = `http://localhost:4000/api/v1/comments/reply/${commentId}`;
      this.api.get(url).subscribe((res: any) => {        
        this.message = '';
        if (res && res.length) {
          this.enableCommentView = commentId;
          this.replyList = res;
        }
      }, error => {
        this.message = '';        
      })
    }
  }
  setReplyTo(messageId: any) {
    this.replyTo = messageId;    
  }

}
