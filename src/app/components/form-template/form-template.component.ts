import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FormTemplateComponent {
  user : User;

  constructor() {
    this.user = new User();
  }

  onSumit(form: NgForm) {
    let password = form.value.password;
    let password2 = form.value.password2;

    if(password != password2)
      form.controls['password2'].setErrors({ passwordMismatch: true });
  }
}
