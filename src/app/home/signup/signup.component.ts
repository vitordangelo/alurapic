import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { PlataformDetectorService } from '../../core/plataform-detector/plataform-detector.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ UserNotTakenValidatorService ]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private plataformDetectorService: PlataformDetectorService,
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email]
        ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ]],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(4),
          Validators.maxLength(14),
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(14),
        ]],
    });

    this.plataformDetectorService.isPlatformBroswer() &&
      this.inputEmail.nativeElement.focus();
  }

  submit() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService
      .signUp(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        error => console.error(error)
      );
  }

}
