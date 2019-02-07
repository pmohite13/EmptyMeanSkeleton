import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IState, IPagedResults, ICustomerResponse, IProject, ICity, IUser, IAuthResponse, IVerify, IForgotPassword, IResetPassword } from '../shared/interfaces';

@Injectable()
export class RegisterService {

    baseRegisterUrl: string = '/api/auth/register';
    baseLoginUrl: string = '/api/auth/login';
    baseVerifyUrl: string = '/api/auth/verify';
    baseForgotPasswordUrl: string = '/api/auth/forgotPassword';
    baseResetPasswordUrl: string = '/api/auth/resetPassword';

    constructor(private http: HttpClient) {

    }

    registerUser(user: IUser): Observable<string> {
        return this.http.post<string>(this.baseRegisterUrl, user)
            .pipe(
                map((token) => {
                    console.log('registration pending: ');
                    return token;
                }),
                catchError(this.handleError)
            );
    }

    forgotPassword(email: IForgotPassword): Observable<string> {
        console.log('inside register service: ', email);
        return this.http.post<string>(this.baseForgotPasswordUrl, email)
            .pipe(
                map((token) => {
                    console.log('forgot password pending: ');
                    return token;
                }),
                catchError(this.handleError)
            );
    }

    // verifyUser(verify: IVerify): Observable<string> {
    verifyUser(verify: any): Observable<string> {
        return this.http.post<string>(this.baseVerifyUrl, verify)
            .pipe(
                map((token) => {
                    console.log('registration success: ');
                    return token;
                }),
                catchError(this.handleError)
            );
    }

    resetPassword(reset: IResetPassword): Observable<string> {
        return this.http.post<string>(this.baseResetPasswordUrl, reset)
            .pipe(
                map((token) => {
                    console.log('password reset success: ');
                    return token;
                }),
                catchError(this.handleError)
            );
    }

    loginUser(user: IUser): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(this.baseLoginUrl, user)
            .pipe(
                map((authResponse) => {
                    console.log('registration success: ');
                    return authResponse;
                }),
                catchError(this.handleError)
            );
    }



    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return throwError(errMessage);

            //return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return throwError(error || 'Node.js server error');
        // return Observable.throw(error || 'Node.js server error');
    }

}
