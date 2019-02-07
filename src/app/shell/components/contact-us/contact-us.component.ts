import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../shared/validation.service';
import { DataService } from '../../../core/data.service';
import { IContact } from '../../../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactFormGroup: FormGroup;
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.buildFormGroup();
  }

  ngOnInit() {
  }

  private buildFormGroup() {
    this.contactFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      subject: ['', [Validators.maxLength(20)]],
      message: ['', [Validators.required, Validators.maxLength(100)]]
    }
    );
  }

  public getInTouch() {
    let contact = this.contactFormGroup.value;

    this.dataService.insertGetInTouch(contact)
      .subscribe((contact: IContact) => {

        if (contact) {
          this.successMessage = 'Thank you! We will get back to you!'

          
        }
        else {
          this.successMessage = '';
          //this.errorMessage = 'Unable to add customer';
        }
      },
        (err) => console.log(err));
  }

}
