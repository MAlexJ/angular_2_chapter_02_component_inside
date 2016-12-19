import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}   from '../component/app.component';
import {ChildComponent}   from '../component/child.component';
import {InnerComponent}   from '../component/inner.component';
import {UserComponent}   from '../component/user.component';
import {EmployeeComponent}   from '../component/employee.component';
import {SetterComponent}   from '../component/setter.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ChildComponent, InnerComponent, UserComponent, EmployeeComponent,SetterComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}