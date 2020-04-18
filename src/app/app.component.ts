import { Component, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meme-generator';
  imgUrl: string;

  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  onImageUpload(imgUrl: string) {
    this.imgUrl = imgUrl;
    this.stepper.selected.completed = true;
    this.stepper.next();
  }
}
