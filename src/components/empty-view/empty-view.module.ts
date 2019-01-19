import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmptyView } from './empty-view';

@NgModule({
  declarations: [
    EmptyView,
  ],
  imports: [
    IonicPageModule.forChild(EmptyView)
  ],
  exports: [
    EmptyView
  ]
})
export class EmptyViewModule {}
