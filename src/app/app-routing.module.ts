import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPOSANTS
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { NewPostComponent } from './post-list/new-post/new-post.component';


const routes: Routes = [
  { path: 'posts',  component: PostListComponent },
  { path: 'posts/new', component: NewPostComponent },
  { path: 'posts/view/:id', component: PostListItemComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
