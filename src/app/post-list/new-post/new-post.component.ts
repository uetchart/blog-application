import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  
  onSavePost() {
    const creationDate = new Date();
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    
    const newPost = new Post(title, content);
    newPost.loveIts = 0;
    newPost.created_at = creationDate.getTime();

    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
 
}

