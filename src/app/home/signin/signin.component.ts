import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { Title } from '@angular/platform-browser';
import { PlataformDetectorService } from '../../core/plataform-detector/plataform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private title: Title,
    private plataformDetectorService: PlataformDetectorService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.title.setTitle('Teeeeste');
  }

  login() {
    this.authService.authenticate(this.loginForm.value.userName, this.loginForm.value.password)
      .subscribe(res => {
        this.router.navigate(['user', this.loginForm.value.userName]);
      }, error => {
        console.error(error);
        this.loginForm.reset();
        this.plataformDetectorService.isPlatformBroswer() &&
          this.userNameInput.nativeElement.focus();
      });
  }

}
