import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private title = inject(Title);

  setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }
}
