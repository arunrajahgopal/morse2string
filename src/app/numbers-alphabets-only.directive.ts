import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: 'input[numbersAlphabetsOnly]'
})
export class NumbersAlphabetsOnlyDirective {

    constructor(private _el: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z0-9\s]*/g, '');
        if ( initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }

}
