import { PostService } from './../post.service';
import { Observable } from 'rxjs/Rx';
import { Post } from './Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    
  }

  loadAllPosts() {
    this.posts = this.postService.loadAll();
  }

}
