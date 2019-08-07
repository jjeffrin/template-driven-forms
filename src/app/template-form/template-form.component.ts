import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('formData', {static: false}) form: NgForm;
  submitted: boolean = false;
  userData: {
    email: string,
    subscription: string,
    password: string
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: FormData) {
    this.submitted = true;
    console.log(this.form.form.value);
  }

}
