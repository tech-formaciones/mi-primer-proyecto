import { Component, Input } from '@angular/core';
import { ImageDataInfo } from '../../models/image.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagesinfo',
  standalone: true,  
  templateUrl: './imagesinfo.component.html',
  styleUrl: './imagesinfo.component.css',
  imports: [CommonModule]
})
export class ImagesinfoComponent {
  @Input() imageItem: ImageDataInfo;
  @Input() imageHeight: number;
  @Input() imageWidth: number;
  @Input() clientX: number;
  @Input() clientY: number;

  constructor() {
    this.imageItem = new ImageDataInfo();
    this.imageHeight = 0;
    this.imageWidth = 0;
    this.clientX = 0;
    this.clientY = 0;
  }
}
