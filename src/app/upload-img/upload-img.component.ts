import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss'],
})
export class UploadImgComponent implements OnInit {
  @Output() fileUrl: EventEmitter<string>;

  constructor() {
    this.fileUrl = new EventEmitter();
  }

  ngOnInit(): void {}

  onFileChange(fileEvent: Event) {
    const file = (fileEvent.target as HTMLInputElement).files[0];

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        this.fileUrl.emit(e.target.result as string);
      };

      fileReader.readAsDataURL(file);
    }
  }
}
