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
    this.getUser();
  }

  // public onTileClicked(tile: Tile) {
  //   this.router.navigate(['shell/login'], { queryParams: { entityId: tile.id } });
  // }

  public onTileClicked(tileId: any) {
   
    this.router.navigate(['shell/login'], { queryParams: { entityId: Number(tileId) } });
  }


  private getUser() {

    let token = localStorage.getItem('token');
    if (token) {
      this.dataService.getUser(token)
        .subscribe((user: IUser) => {

          this.user = user;

          if (this.user.entityId === 1) {
            this.dataService.getVolunteerByUser(this.user._id)
              .subscribe((volunteer: IVolunteer) => {

                this.volunteer = volunteer[0];
                if (this.volunteer) {
                  this.router.navigate(['shell/volunteerProfile']);
                }
                else {
                  this.router.navigate(['shell/newVolunteer', '0']);
                }
              },
                (err) => console.log(err));
          }
          if (this.user.entityId === 2) {
            this.dataService.getOrganizationByUser(this.user._id)
              .subscribe((organization: IOrganization) => {

                this.organization = organization[0];
                if (this.organization) {
                  this.router.navigate(['shell/organizationProfile']);
                }
                else {
                  this.router.navigate(['shell/organization', '0']);
                }
              },
                (err) => console.log(err));
          }
        },
          (err) => console.log(err));
    }
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
