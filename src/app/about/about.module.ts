import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';

const ABOUT_ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
  }
]

@NgModule({
  declarations: [AboutComponent],
  exports: [ CommonModule, AboutComponent],
  imports: [
    RouterModule.forChild(ABOUT_ROUTES),
    CommonModule
  ]
})
export class AboutModule { }
