import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../core/data.service';
import { IUser, IVolunteer, IOrganization } from '../../../shared/interfaces';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  id: string;
  tiles: Tile[] = [
    { id: 1, text: 'I am Volunteer', cols: 2, rows: 2, color: 'lightblue', imageName: 'volunteer_index', imageSrc: '../../../../assets/images/volunteer_index.jpeg', desc: 'For Volunteer' },
    { id: 2, text: 'Looking for Volunteers', cols: 2, rows: 2, color: 'lightgreen', imageName: 'organization_index', imageSrc: '../../../../assets/images/organization_index-1.jpg', desc: 'For Organization' },

  ];
  user: IUser;
  volunteer: IVolunteer;
  organization: IOrganization;

  constructor(private router: Router,
    private dataService: DataService) {
  }

  ngOnInit() {
    //this.getUser();
  }

  // public onTileClicked(tile: Tile) {
  //   this.router.navigate(['shell/login'], { queryParams: { entityId: tile.id } });
  // }

  public onTileClicked(tileId: any) {
   
    this.router.navigate(['shell/login'], { queryParams: { entityId: Number(tileId) } });
  }


 
}

export interface Tile {
  id: number;
  color: string;
  cols: number;
  rows: number;
  text: string;
  imageName: string;
  imageSrc: string;
  desc: string;
}
