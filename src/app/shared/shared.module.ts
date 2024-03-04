import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PostPageComponent } from '../post-page/post-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { SharedRoutingModule } from './shared.routing.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    PostPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
