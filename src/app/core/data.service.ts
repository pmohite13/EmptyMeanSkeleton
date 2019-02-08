import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IState, IPagedResults, ICustomerResponse, IProject, ICity, IWorkArea, IQualification, IVolunteer, IVolunteerResponse, IUser, IDomain, IOrganization, IOrganizationResponse, IProjectResponse, ITaluka, IProjectVolunteer, IProjectVolunteerResponse, IContact, IContactResponse } from '../shared/interfaces';

@Injectable()
export class DataService {

    
    baseContactUrl: string = '/api/contact';
   

    addvolunteertoproject

    constructor(private http: HttpClient) {

    }

    


    insertGetInTouch(contact: IContact): Observable<IContact> {
        return this.http.post<IContactResponse>(this.baseContactUrl, contact)
            .pipe(
                map((data) => {
                    console.log('insertGetInTouch status: ' + data.status);
                    return data.contact;
                }),
                catchError(this.handleError)
            );
    }
    

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
