import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggleMode() : void{
    let element = document.body;
    element.classList.toggle("dark-mode");
  }



}
