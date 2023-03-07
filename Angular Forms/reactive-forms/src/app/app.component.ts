import { Component ,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import {forbiddenNameValidator} from './shared/user-name.validator'
import { passwordValidator } from './shared/password.validator'
import { RegistrationService } from './registration.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private fb:FormBuilder,private _registrationService: RegistrationService) {}
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

    registrationForm: FormGroup;

    get userName() {
        return this.registrationForm.get('userName');
    }

    get email() {
        return this.registrationForm.get('email');
    }

    get alternateEmails() {
        return this.registrationForm.get('alternateEmails') as FormArray;
    }

    addAlternateEmails(){
        this.alternateEmails.push(this.fb.control(''));
    }

    ngOnInit() {
        this.registrationForm = this.fb.group({
            userName:['', [Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
            password:[''],
            email:[''],
            subscribe: [false],
            confirmPassword:[''],
            address: this.fb.group({
                city: [''],
                state: [''],
                postalCode: [''],
            }),
            alternateEmails:this.fb.array([])
        },{validator: passwordValidator});
        
        this.registrationForm.get('subscribe').valueChanges
            .subscribe(checkvalue => {
                const email = this. registrationForm.get('email');
                if(checkvalue) {
                    email.setValidators(Validators.required);
                }
                else {
                    email.clearValidators();
                }

                email.updateValueAndValidity();
            })
    }

    loadApiData(){
        this.registrationForm.patchValue({
            userName: 'Thet',
            password:'test',
            confirmPassword:'test',
        })
    }

    onSubmit() {
        console.log(this.registrationForm.value);
        this._registrationService.register(this.registrationForm.value)
        .subscribe(
            response => console.log('Success',response),
            error => console.error('Error',error)
        );
    }
}
