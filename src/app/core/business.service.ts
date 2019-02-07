import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IState, IPagedResults, ICustomerResponse, IProject, ICity, IUser, IAuthResponse } from '../shared/interfaces';

@Injectable()
export class BusinessService {

    private project: BehaviorSubject<boolean> = new BehaviorSubject(null);
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(null);
    private projectAdded: BehaviorSubject<boolean> = new BehaviorSubject(null);
    private volunteerProjectApplied: BehaviorSubject<boolean> = new BehaviorSubject(null);

    constructor() { }

    isProjectUpdate(flag: boolean) {
        this.project.next(flag);
    }

    project$(): Observable<boolean> {
        return this.project.asObservable()
    }

    isLoggedIn(flag: boolean) {
        this.loggedIn.next(flag);
    }

    loggedIn$(): Observable<boolean> {
        return this.loggedIn.asObservable()
    }

    isProjectAdded(flag: boolean) {
        this.projectAdded.next(flag);
    }

    projectAdded$(): Observable<boolean> {
        return this.projectAdded.asObservable()
    }

    isvolunteerProjectApplied(flag: boolean) {
        this.volunteerProjectApplied.next(flag);
    }

    volunteerProjectApplied$(): Observable<boolean> {
        return this.volunteerProjectApplied.asObservable()
    }




}
