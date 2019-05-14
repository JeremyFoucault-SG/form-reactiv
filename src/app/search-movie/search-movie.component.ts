import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

/* Model */
import { SearchMovieForm } from '../models/search-movie-form-model';

/* Custom Validators */
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  searchMovieForm: FormGroup;

  /* Data for rangeDateValidator */
  minDate: Date = new Date(1900, 0, 1);
  currentDate: Date = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchMovieForm = this.fb.group({
      idGroup: this.fb.group({
        idElt: [''],
        title: [''],
      }, { validator: CustomValidators.isRequiredValidator('idElt', 'title') }),
      type: ['serie'],
      releaseDate: ['', CustomValidators.rangeDateValidator(this.minDate, this.currentDate)],
      sheet: [{ value: '', disabled: true }]
    });
    this.searchMovieForm.patchValue({ sheet: 'short' });

    /* Bonus: "Souscris aux changements des contrôles avec valueChanges et affiche la valeur dans la console" */
    this.searchMovieForm.get('releaseDate').valueChanges.subscribe(
      value => {
        console.log(value);
      }
    );
    /* Bonus: "La liste box Fiche doit être activée seulement si le champ Identifiant est renseigné" */
    this.searchMovieForm.get('idGroup.idElt').valueChanges.subscribe(
      value => {
        console.log(value);
        if (value !== '') {
          this.searchMovieForm.get('sheet').enable();
        }
      }
    );

  }

  onSubmit(e: FormGroup) {
    (e.valid) ? (console.log(`Form is valid : ${(JSON.stringify(e.value))}`)) : (console.log('Form is invalid'));
  }

}


