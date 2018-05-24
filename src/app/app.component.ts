import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkClicked = 'recipe';
  onLinkClicked(link: string){
    console.log(link);
    this.linkClicked = link;
  }
  
}
