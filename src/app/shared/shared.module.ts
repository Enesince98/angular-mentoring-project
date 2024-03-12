import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PostPageComponent } from '../post-page/post-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { SharedRoutingModule } from './shared.routing.module';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    PostPageComponent,
    HomePageComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    PostComponent,
  ]

})
export class SharedModule { }
