import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Post } from '../shared/interfaces/post.interface';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { TitleService } from '../services/title.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  posts$!: Observable<Post[]>;
  private postService = inject(PostService);
  private titleService = inject(TitleService);
  ngOnInit(): void {
    this.titleService.setTitle("Home Page");
    this.posts$ = this.postService.getAllPosts();
  }
}
