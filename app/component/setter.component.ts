import {Component, Input} from '@angular/core';

@Component({
    selector: 'setter-app',
    templateUrl: 'template/html/setter.component.html'
})
export class SetterComponent {
    _name: string;

    @Input()
    set name(value: string) {
        this._name = value;
    }

    get name(): string {
        return this._name;
    }
}