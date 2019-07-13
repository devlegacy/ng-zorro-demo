import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading:boolean = false;
  validateForm: FormGroup;
  user: any = <any>{};

  constructor(private fb: FormBuilder, public _authService: AuthenticationService, public _route: Router, public _locker: SessionStorageService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm($e: Event): void {
    $e.preventDefault();
    this.isLoading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.user = {...this.validateForm.value};

    this._authService.logIn(this.user.username, this.user.password).subscribe(
      data => {
        this._authService.user = data;
        this._authService.hasSession = true;
        this._locker.store('user', data);
        this._route.navigate(['/home']);
        this.isLoading = false;
      },
      err => {
        console.error(err);
        this._authService.hasSession = false;
        this.isLoading = false;
      },
      () => {
        console.log('Finish');
        this.isLoading = false;
      }
    );
  }
}
