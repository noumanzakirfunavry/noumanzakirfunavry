import { FormControl } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export class WhiteSpaceValidator {

static noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}


static noWhiteSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf('  ') >= 0){
        return {noWhiteSpace: true}
    }
    return null;
}

static noSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0){
        return {noSpace: true}
    }
    return null;
 }
}