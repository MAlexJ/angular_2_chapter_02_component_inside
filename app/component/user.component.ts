/**
 * Import libraries
 */
import {Component, Input} from '@angular/core'

/**
 * Entity class
 */
@Component({
    selector: 'user-app',
    templateUrl: 'template/html/user.component.html'
})
export class UserComponent {
    @Input()
    firstName: string;
    @Input()
    lastName: string;
}