import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { SearchModule } from './search/search.module';
import { SafeURLPipe } from './video/pipes/safe-url.pipe';
import { VideoPageComponent } from './video/component/video-page/video-page.component';
import { VideoModule } from './video/video.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    SearchModule,
    VideoModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
