import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageDataInfo } from '../../models/image.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewer',
  standalone: true,  
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css',
  imports: [CommonModule]
})
export class ViewerComponent {
  @Input() imageItem: ImageDataInfo;
  @Output() MouseMove: EventEmitter<{ clientX: number, clientY: number }>;

  constructor() {
    this.imageItem = new ImageDataInfo();
    this.MouseMove = new EventEmitter<{ clientX: number, clientY: number }>();
  }

  onMouseMove(e: MouseEvent): void {
    this.MouseMove.emit({clientX: e.clientX, clientY: e.clientY});
  }
}
