import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../shared/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', id: 1 },
    { title: 'Post 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: 2 },
    { title: 'Post 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', id: 3 },
  ];
  getAllPosts(): Observable<any[]> {
    return of(this.posts);
  }
  getPostById(id: number): Observable<any> {
    const post = this.posts.find(p => p.id === id);
    return of(post);
  }
  constructor() { }
}
