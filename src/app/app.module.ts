import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GenerateMemeModule } from './generate-meme/generate-meme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadImgComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    GenerateMemeModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
