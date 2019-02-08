import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from '../../../core/business.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  showSignOutButton: boolean = false;
  showToggleButton: boolean = true;

  constructor(private router: Router,
    private businessService: BusinessService) { }

  ngOnInit() {
   
    let token = localStorage.getItem('token');
    this.showSignOutButton = !!token;
  
   
    if (this.router.url.indexOf('organization') > 0 || this.router.url.indexOf('projectApplicationView') > 0 || this.router.url.indexOf('addProject') > 0) {
      this.showToggleButton = false;
    }
    else {
      this.showToggleButton = true;
    }
    this.router.events.subscribe(_ => {

      if (this.router.url.indexOf('organization') > 0 || this.router.url.indexOf('projectApplicationView') > 0 || this.router.url.indexOf('addProject') > 0) {
        this.showToggleButton = false;
      }
      else {
        this.showToggleButton = true;
      }
    });

  }


  public signOut() {
    localStorage.clear();
    this.showSignOutButton = false;
    this.router.navigate(['/']);
  }

}
