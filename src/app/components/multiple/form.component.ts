import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiple-form',
  standalone: true,  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports: [CommonModule, FormsModule]
})
export class FormComponent implements OnInit {
  @Input() usuario: User;

  constructor() {
      this.usuario = new User();
  }

  ngOnInit() {
  }
}
