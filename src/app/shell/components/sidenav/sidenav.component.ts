import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../core/data.service';
import { IPagedResults, IProject } from '../../../shared/interfaces';
import { BusinessService } from '../../../core/business.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  projects: IProject[] = [];
  filteredProjects: IProject[] = [];
  totalRecords: number = 0;
  pageSize: number = 10;



  constructor(private zone: NgZone,
    private router: Router,
    private dataService: DataService,
    private businessService: BusinessService) {
    //this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
   // this.getProjectList(1);

    

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        //this.sidenav.close();
      }
    });  

  }

  isOrganizationContext(): boolean {
    return (this.router.url.indexOf('organization') > 0 || this.router.url.indexOf('projectApplicationView') > 0 || this.router.url.indexOf('addProject') > 0);
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  

}
