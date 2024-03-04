import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.post = history.state.post;
  }
}
