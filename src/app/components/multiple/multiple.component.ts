import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

import data from './../../data/dataUser.json';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ColorpickerComponent } from './colorpicker.component';
import { SignatureComponent } from './signature.component';

@Component({
  selector: 'app-multiple',
  standalone: true,  
  templateUrl: './multiple.component.html',
  styleUrl: './multiple.component.css',
  imports:[CommonModule, ListComponent, FormComponent, ColorpickerComponent, SignatureComponent]
})
export class MultipleComponent implements OnInit {
  DB: Array<User>;
  usuario: User;
  color: string;
  errorMessage: any;

  constructor() {
    this.DB = data as Array<User>;    
    this.usuario = new User();
    this.color = 'red';
    this.errorMessage = '';
  }

  ngOnInit() {    
  }

  selectUser(item: User): void {
      this.usuario = item;
  }

  selectColor(item: any): void {
      this.color = item;
  }
}
