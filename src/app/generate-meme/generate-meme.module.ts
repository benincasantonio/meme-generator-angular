import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateMemeComponent } from './generate-meme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [GenerateMemeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [GenerateMemeComponent]
})
export class GenerateMemeModule { }
