import { ModuleWithProviders } from '@angular/core';

export interface ICustomer {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state?: IState;
    stateId?: number;
    zip: number;
    gender: string;
    orderCount?: number;
    orders?: IOrder[];
    orderTotal?: number;
}

export interface IVolunteer {
    _id?: string;
    prefix: number;
    dateOfBirth: Date;
    gender: number;
    workAreas: IWorkArea[];
    qualification: IQualification;
    qualificationId: number;
    city: ICity;
    cityId: number;
    state?: IState;
    stateId?: number;
    pincode: number;
    address1: string;
    address2: string;
    user: IUser;
    userId: string;
    createdOn?: Date;
    updatedOn?: Date;
    projects: IProject[];
}

export interface IContact {
    _id?: string;
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface IOrganization {
    _id?: string;
    orgName: number;
    domain: IDomain;
    domainId: number;
    city: ICity;
    cityId: number;
    state?: IState;
    stateId?: number;
    pincode: number;
    address: string;
    contactFirstName: string;
    contactLastName: string;
    contactPhone: string;
    website: string;
    user: IUser;
    createdOn?: Date;
    updatedOn?: Date;
}

export interface IProject {
    _id?: string;
    projectName: string;
    projectDescription: string;
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    workArea: IWorkArea,
    workAreaId: number,
    state: IState,
    stateId: number,
    city: ICity,
    cityId: number,
    talukas: ITaluka[],
    organization: IOrganization,
    user: IUser,
    createdOn?: Date,
    updatedOn?: Date,
    isApproved: Boolean
}

export interface IUser {
    _id?: string;
    firstName?: string;
    lastName: string;
    email: string;
    phone: number;
    password: string;
    entityId: number;
}

export interface IForgotPassword {
    email: string;
}

export interface IResetPassword {
    email: string;
    id: string; 
    password: string;   
}
export interface IState {
    id: number;
    abbreviation: string;
    name: string;
}

export interface IWorkArea {
    id: number;
    name: string;
}

export interface IQualification {
    id: number;
    name: string;
}

export interface IDomain {
    id: number;
    name: string;
}

export interface ICity {
    id: number;
    abbreviation: string;
    name: string;
    state: IState,
    stateId: string
}

export interface ITaluka {
    id: number;
    abbreviation: string;
    name: string;
    city: ICity,
    cityId: string
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ICustomerResponse {
    customer: ICustomer;
    status: boolean;
    error: string;
}

export interface IVolunteerResponse {
    volunteer: IVolunteer;
    status: boolean;
    error: string;
}

export interface IContactResponse {
    contact: IContact;
    status: boolean;
    error: string;
}
export interface IProjectVolunteerResponse {
    projectVolunteer: IProjectVolunteer;
    status: boolean;
    error: string;
}

export interface IOrganizationResponse {
    organization: IOrganization;
    status: boolean;
    error: string;
}

export interface IProjectResponse {
    project: IProject;
    status: boolean;
    error: string;
}


export interface IAuthResponse {
    token: string;
    auth: boolean;
    error: string;
}

export interface IVerify {
    email: string;
    id: string;
}

export interface IProjectVolunteer {
    project: IProject;
    volunteer: IVolunteer;
}