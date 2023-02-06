import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {forbiddenNameValidator} from './shared/user-name.validator'
import {passwordValidator} from './shared/password.validator'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private fb:FormBuilder) {}
    // registrationForm = new FormGroup({
    //     userName: new FormControl('Thet'),
    //     password: new FormControl(''),
    //     confirmPassword: new FormControl(''),
    //     address: new FormGroup({
    //         city: new FormControl(''),
    //         state: new FormControl(''),
    //         postalCode: new FormControl(''),
    //     })
    // });
    get userName() {
        return this.registrationForm.get('userName');
    }

    registrationForm = this.fb.group({
        userName:['', [Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
        password:[''],
        confirmPassword:[''],
        address: this.fb.group({
            city: [''],
            state: [''],
            postalCode: [''],
        })
    },{validator: passwordValidator});
    
    loadApiData(){
        this.registrationForm.patchValue({
            userName: 'Thet',
            password:'test',
            confirmPassword:'test',
        })
    }
}
