import {Component} from '@angular/core';
import {MorseCodeService} from './morse-code.service';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'morse2string';
  resultMorseCode = '';
  resultString = '';
  morseForm = this.fb.group({
    morseCode: [''],
    string: ['']
  });

  constructor(
    private morseCodeService: MorseCodeService,
    private fb: FormBuilder
  ) {
  }

  convertToString(ev: Event) {
    const morseCode = (ev.target as HTMLInputElement).value;
    this.morseCodeService.decodifyMessage(morseCode).subscribe(m => {
        this.resultString = m;
      }
    );
  }

  convertToMorse(ev: Event) {
    const stringToConvert = (ev.target as HTMLInputElement).value.toUpperCase();
    this.morseCodeService.codifyMessage(stringToConvert).subscribe(c => {
      this.resultMorseCode = c;
    });
  }

  resetFormInput(value: string) {
    this.morseForm.controls[value].reset();
    if (value === 'morseCode') {
      this.resultString = '';
    } else if (value === 'string') {
      this.resultMorseCode = '';
    }
  }
}
