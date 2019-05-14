import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';



const ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'search-movie', component: SearchMovieComponent },
  { path: 'app', component: AppComponent },
  
];

export { ROUTES };