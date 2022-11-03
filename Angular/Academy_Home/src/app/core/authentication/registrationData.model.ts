export class RegistrationData{
    id!:number;
    firstname!:string;
    lastname!:string;
    emailId!:string;
    password!:string;
    country!:string;
    state!:string;
    city!:string;
}
export class Country{
    id!:number;
    name!:string;
}

export class State{
    id!:number;
    name!:string;
}

export class City{
    id!:number;
    name!:string;
}