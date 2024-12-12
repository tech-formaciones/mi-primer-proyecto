import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  providers: [CustomerService]
})
export class CustomerDetailComponent implements OnInit {
  private modalService = inject(NgbModal);
  @ViewChild('content', { static: true}) content: any;
  id: string | undefined;
  customer: Customer;
  message: string;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {
    this.id = this.route.snapshot.paramMap.get('id')?.toString();
    this.customer = new Customer();
    this.message = '';
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomerById(this.id!).subscribe((data) => {
      this.customer = data;
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id!, this.customer).subscribe((data) => {
      this.message = 'Datos del cliente registrados correctamente.';
      this.modalService.open(this.content, { });
      this.customerService.tempData = null;
    });
  }

  onSumit() {
    // validar el formulario
    this.updateCustomer();
  }
}
