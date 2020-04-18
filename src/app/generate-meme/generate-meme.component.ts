import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as p5 from 'p5';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generate-meme',
  templateUrl: './generate-meme.component.html',
  styleUrls: ['./generate-meme.component.scss'],
})
export class GenerateMemeComponent implements AfterViewInit, OnChanges {
  @Input() imageUrl: string;

  @ViewChild('imageCanvas') imageCanvas: ElementRef;
  p5Sketch: p5;
  form: FormGroup;
  topTextElement: p5;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      topText: [],
      bottomText: [],
    });
  }

  ngAfterViewInit(): void {
    this.initCanvas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.imageUrl.currentValue && !changes.imageUrl.firstChange) {
      this.p5Sketch.remove();
      this.form.reset();
      this.initCanvas();
    }
  }

  generateMeme() {
    this.p5Sketch.remove();
    this.initCanvas();
  }

  private initCanvas() {
    this.p5Sketch = new p5((p: p5) => {
      const imageUrl = this.imageUrl;
      p.setup = () => {
        p.createCanvas(600, 400);
        p.loadImage(imageUrl, (img) => {
          p.image(img, 0, 0, 600, 400);
          p.textSize(20);
          p.textStyle('bold');

          const values = this.form.getRawValue();
          const impactFont = p.loadFont('/assets/fonts/impact.ttf');
          p.fill(255, 255, 255, 255);
          p.textFont(impactFont);
          p.textSize(30);
          p.stroke(0);
          p.strokeWeight(5);
          p.textStyle('bold');

          if (values.topText) {
            p.textAlign('center', 'top');
            p.text(values.topText, p.width / 2, 15);
          }

          if(values.bottomText) {
            p.textAlign('center', 'bottom');
            p.text(values.bottomText, p.width / 2, p.height - 15);
          }
        });
      };
    }, this.imageCanvas.nativeElement);
  }

  downloadMeme() {
    this.p5Sketch.save('meme');
  }
}
