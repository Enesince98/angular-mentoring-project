import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Post {
  title: string;
  content: string;
  id: number;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.posts = this.getMockPosts();
  }
  viewPostDetails(postId: number): void {
    this.router.navigate(['/post', postId], { state: { post: this.getPostById(postId) } });
  }
  private getPostById(postId: number): any {
    return this.posts.find(post => post.id === postId);
  }
  private getMockPosts(): Post[] {
    return [
      { title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', id: 1 },
      { title: 'Post 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: 2 },
      { title: 'Post 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', id: 3 },
    ];
  }
}
