import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: 'input[dotDashOnly]'
})
export class DotsDashesOnlyDirectiveInputDirective {

    constructor(private _el: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^.\-\s]*/g, '');
        if ( initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }

}
