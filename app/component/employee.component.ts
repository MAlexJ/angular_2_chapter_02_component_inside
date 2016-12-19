import {Component} from '@angular/core';

/**
 * Component: EmployeeComponent
 */
@Component({
    selector: 'employee-list-app',
    templateUrl: 'template/html/employee_list.component.html'
})
export class EmployeeComponent {
    /**
     * Array of employee
     * @type {Array}
     */
    items: Employee [];

    /**
     * Initialize
     */
    constructor() {
        this.items = [];
    }

    /**
     * Add the employee in array.
     * @param name
     * @param age
     * @param salary
     */
    public addItem(name: string, age: number, salary: number): void {
        if (CheckValues.check(name, age, salary)) {
            this.items.push(new Employee(name, age, salary));
        }
    }
}

/**
 * Check incoming values
 */
export class CheckValues {

    // check incoming values
    public static check(name: string, age: number, salary: number): boolean {
        return this.checkVal(name) && this.checkVal(age) && this.checkVal(salary);
    }

    // check the value string or number
    private static checkVal(val: string|number): boolean {
        if (val != null) {
            if (typeof val !== 'undefined') {
                if (typeof val == "string") {
                    if (val != '') {
                        return true;
                    }
                } else {
                    if (val > 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

/**
 * Entity class
 */
export class Employee {
    /**
     * Fields
     */
    name: string;
    age: number;
    salary: number;

    /**
     * Initialize the object
     *
     * @param name
     * @param age
     * @param salary
     */
    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}