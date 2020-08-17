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
    console.log(ev.target.value, this.morseForm.get('string'));
    const morseCode = ev.target.value;
    this.morseCodeService.decodifyMessage(morseCode).subscribe(m => {
      console.log(m);
      this.resultString = m;
    }
    );
  }
  convertToMorse(ev) {
    console.log(ev.target.value);
    const stringToConvert = ev.target.value.toUpperCase();
    this.morseCodeService.codifyMessage(stringToConvert).subscribe(c => {
      console.log(c);
      this.resultMorseCode = c;
    });
   /* console.log(ev.target.value);*/
  }
  resetFormInput(value) {
    console.log(this.morseForm);
    this.morseForm.controls[value].reset();
  }


}
