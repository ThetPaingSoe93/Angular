import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'tdf';
    topics = ['Angular','React','Vue'];
    topicHasError = true;
    userModel = new User('Rob','rob@test.com', 9977818045,'default','morning',true);
    submitted = false;
    errMsg='';
    constructor(private _enrollmentService:EnrollmentService) {}
    validateTopic(value:any) {
        if(value == 'default'){
            this.topicHasError = true;
        }

        else{
            this.topicHasError = false;
        }
    }

    onSubmit() {
        this.submitted = true;
        this._enrollmentService.enroll(this.userModel)
            .subscribe(
                data => console.log('success',data),
                error => this.errMsg = error.statusText
            )
    }
}
