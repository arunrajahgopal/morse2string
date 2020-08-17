import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import * as morseCodes from '../assets/morse-code.json';
import { Code } from './morse.entitiy';

@Injectable({
  providedIn: 'root'
})
export class MorseCodeService {
  codesTranslator: { [key: string]: string } = {};
  lettersTranslator: { [key: string]: string } = {};

  constructor() {
    console.log(morseCodes['default']);
    morseCodes['default'].forEach(mc => {
      this.codesTranslator[mc.morse] = mc.character;
      this.lettersTranslator[mc.character] = mc.morse;
    });
  }

  codifyMessage(message: string): Observable<string> {
    let codifyMessage = '';
    for (const [messageIteration, i] of message) {
      if (messageIteration !== ' ') {
        if (this.lettersTranslator[messageIteration] !== undefined) {
          codifyMessage += this.lettersTranslator[messageIteration];
        } else {
          codifyMessage = 'Invalid Text. Please use only characters A-Z & 0-9.';
        }
      }
      codifyMessage += ' ';
    }
    return of(codifyMessage.trim());
    }


  decodifyMessage(morseCode: string): Observable<string> {
    const code: string[] = morseCode.split(' ');
    let decodifyMessage = '';
    for (const morseIteration of code) {
      if (!morseIteration) {
        decodifyMessage += ' ';
      } else {
        if (this.codesTranslator[morseIteration] !== undefined) {
          decodifyMessage += this.codesTranslator[morseIteration];
        } else {
          decodifyMessage = 'Invalid Morse Code. Please use spaces as seperator.';
        }
      }
    }
    return of(decodifyMessage.trim());
  }
}

