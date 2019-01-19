import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EmptyViewModule } from './components/empty-view/empty-view.module';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { IonicImageLoader } from 'ionic-image-loader';
import { ComponentsModule } from './components/components.module';


@NgModule({
  imports: [
    IonicModule,
    EmptyViewModule,
    ImgFallbackModule,
    LazyLoadImageModule,
    IonicImageLoader,
    ComponentsModule,
  ],
  exports: [
    EmptyViewModule,
    ImgFallbackModule,
    LazyLoadImageModule,
    IonicImageLoader,
    ComponentsModule,
  ]
})

export class SharedModule {}
