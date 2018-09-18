import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  linkClicked = 'recipe';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfWIDSXCeiDKXJ0h306tsuQwbG5qlCCJU',
      authDomain: 'ng-recipe-book-d7242.firebaseapp.com'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(
          token => {
            this.authService.setToken(token);
          }
        );
      }
    });
  }

  onLinkClicked(link: string) {
    console.log(link);
    this.linkClicked = link;
  }

}
