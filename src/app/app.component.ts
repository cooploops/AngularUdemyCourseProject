import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  linkClicked = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfWIDSXCeiDKXJ0h306tsuQwbG5qlCCJU',
      authDomain: 'ng-recipe-book-d7242.firebaseapp.com'
    });
  }

  onLinkClicked(link: string) {
    console.log(link);
    this.linkClicked = link;
  }

}
