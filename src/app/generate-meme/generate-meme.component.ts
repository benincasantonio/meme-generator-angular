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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      fontSize: [30, Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.initCanvas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.imageUrl.currentValue && !changes.imageUrl.firstChange) {
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

          const values = this.form.getRawValue();
          const impactFont = p.loadFont('/assets/fonts/impact.ttf');
          p.textSize(Number(this.form.get('fontSize').value));
          p.fill(255, 255, 255, 255);
          p.textStyle('bold');
          p.textFont(impactFont);
          p.stroke(0);
          p.strokeWeight(5);

          if (values.topText) {
            p.textAlign('center', 'top');
            p.text(values.topText, p.width / 2, 15);
          }

          if (values.bottomText) {
            p.textAlign('center', 'bottom');
            p.text(values.bottomText, p.width / 2, p.height - 15);
          }
        });
      };
    }, this.imageCanvas.nativeElement);
  }

  downloadMeme() {
    if (this.form.valid) {
      this.p5Sketch.save('meme');
    }
  }
}
