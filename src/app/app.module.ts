import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NumbersAlphabetsOnlyDirective} from "src/app/numbers-alphabets-only.directive";
import {DotsDashesOnlyDirectiveInputDirective} from "src/app/dots-dashes-only.directive";

@NgModule({
    declarations: [
        AppComponent,
        NumbersAlphabetsOnlyDirective,
        DotsDashesOnlyDirectiveInputDirective
    ],
    imports: [
        BrowserModule,
        MatGridListModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
