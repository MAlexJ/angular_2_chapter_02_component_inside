import {Component} from '@angular/core';

@Component({
    selector: 'inn-app',
    templateUrl: 'template/html/inner.component.html',
    styles: ['#inner_id{color: #2900dc;}']
})
export class InnerComponent {
    name: string = 'Item Name';
}