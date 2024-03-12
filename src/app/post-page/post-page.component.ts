import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces/post.interface';
import { PostService } from '../services/post.service';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent implements OnInit {
  post$!: Observable<Post>;
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  private titleService = inject(TitleService);
  ngOnInit(): void {
    const postId = Number(this.route.snapshot.params["id"]);
    this.titleService.setTitle(`Post ${postId}`);
    this.post$ = this.postService.getPostById(postId);
  }
}
