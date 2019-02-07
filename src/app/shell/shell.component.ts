import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor( sanitizer: DomSanitizer, router: Router) {
    //iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/images/avatars.svg'));
   
  }


  ngOnInit() {
  }

}
