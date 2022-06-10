import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sidebar = {}
  widhtNav?:number;
  isMenuOpen = true;
  contentMargin = 240;


  openNav(){
    return document.getElementById("mySidebar")!.style.width = "250px";
  }

  closeNav(){
    return document.getElementById("mySidebar")!.style.width = "0px";
  }


}
