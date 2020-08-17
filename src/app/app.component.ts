import { Component, OnInit } from '@angular/core';
import {MorseCodeService} from './morse-code.service';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
  ) { }

  ngOnInit() {

  }

  convertToString(ev) {
    const morseCode = ev.target.value;
    this.morseCodeService.decodifyMessage(morseCode).subscribe(m => {
      this.resultString = m;
    }
    );
  }
  convertToMorse(ev) {
    const stringToConvert = ev.target.value.toUpperCase();
    this.morseCodeService.codifyMessage(stringToConvert).subscribe(c => {
      this.resultMorseCode = c;
    });
  }
  resetFormInput(value) {
    this.morseForm.controls[value].reset();
    if (value === 'morseCode') {
      this.resultString = '';
    } else if (value === 'string') {
      this.resultMorseCode = '';
    }
  }


}
