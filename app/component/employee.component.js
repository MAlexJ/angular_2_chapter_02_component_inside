"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
 * Component: EmployeeComponent
 */
var EmployeeComponent = (function () {
    /**
     * Initialize
     */
    function EmployeeComponent() {
        this.items = [];
    }
    /**
     * Add the employee in array.
     * @param name
     * @param age
     * @param salary
     */
    EmployeeComponent.prototype.addItem = function (name, age, salary) {
        if (CheckValues.check(name, age, salary)) {
            this.items.push(new Employee(name, age, salary));
        }
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee-list-app',
            templateUrl: 'template/html/employee_list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
/**
 * Check incoming values
 */
var CheckValues = (function () {
    function CheckValues() {
    }
    // check incoming values
    CheckValues.check = function (name, age, salary) {
        return this.checkVal(name) && this.checkVal(age) && this.checkVal(salary);
    };
    // check the value string or number
    CheckValues.checkVal = function (val) {
        if (val != null) {
            if (typeof val !== 'undefined') {
                if (typeof val == "string") {
                    if (val != '') {
                        return true;
                    }
                }
                else {
                    if (val > 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    return CheckValues;
}());
exports.CheckValues = CheckValues;
/**
 * Entity class
 */
var Employee = (function () {
    /**
     * Initialize the object
     *
     * @param name
     * @param age
     * @param salary
     */
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
exports.Employee = Employee;
