import { Component, ViewChild } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { CommonModule } from '@angular/common';
import { TransformcolorDirective } from '../../directives/transformcolor.directive';
import { ShowIfDirective } from '../../directives/show-if.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, TransformcolorDirective, ShowIfDirective],
  providers: []
})
export class DemoDirectivesComponent {
  colors: Array<string>;
  color: string;
  color2: string;
  isShow: boolean;
  texto: string;

  demoNumber: number;

  @ViewChild(TransformcolorDirective) directiva!: TransformcolorDirective;

  constructor(private core: CoreService) {
    this.colors = ['Azul', 'Negro', 'Rojo', 'Verde'];
    this.color = 'Negro';
    this.color2 = 'Negro';
    this.isShow = true;
    this.texto = 'Trabajando con Directivas';

    this.demoNumber = this.core.testNumber;
  }

  onClick() {
    alert('Click - Componente');
  }

  onChangeSelect() {
    this.directiva.colorName = this.color;
    this.directiva.ChageColor();
  }
}
