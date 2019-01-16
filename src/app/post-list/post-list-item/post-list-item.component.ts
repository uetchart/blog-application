import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() postIndex: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onIncrement() {
    this.postsService.incrementPostLoveIts(this.post);
  }
  onDecrement() {
    this.postsService.decrementPostLoveIts(this.post);
  }
  onDelete() {
    this.postsService.removePost(this.post);
  }
}
