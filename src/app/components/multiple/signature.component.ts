import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiple-signature',
  standalone: true,  
  templateUrl: './signature.component.html',
  styleUrl: './signature.component.css',
  imports: [CommonModule]
})
export class SignatureComponent implements OnInit {
  @Input() usuario: User;
  @Input() color: string;

  constructor() {   
    this.usuario = new User();
    this.color = 'black';  
  }

  ngOnInit() {
  }
}
