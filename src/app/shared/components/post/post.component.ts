import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() post!: Post;
  private router = inject(Router);
  viewPostDetails(): void {
    this.router.navigate(['/post', this.post.id], { state: { post: this.post } });
  }
}
