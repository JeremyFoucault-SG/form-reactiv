import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static isRequiredValidator(idElt: string, title: string): { [key: string]: any } | null {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const idEltValue = control.get(idElt).value;
      const titleValue = control.get(title).value;
      if ((idEltValue !== '') || (titleValue !== '')) {
        return null;
      } else {
        return ({ 'isRequired': 'One of the two fields "ID" or "Title" must be filled in' });
      }
    };
  }

  static rangeDateValidator(min: Date, current: Date): { [key: string]: any } | null {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const minDate: Date = min;
      const currentDate: Date = current;
      const targetDate = new Date(control.value);
      if ((targetDate > minDate) && (targetDate < currentDate)) {
        return null;
      } else {
        return ({ 'min': `Current date must be between ${minDate.getFullYear()} and ${currentDate.getFullYear()}.` });
      }
    };
  }

}