export class RegistrationData{
    id!:number;
    firstname!:string;
    lastname!:string;
    emailId!:string;
    password!:string;
    country!:string;
    state!:string;
    city!:string;
    fullname!:string;
    phoneno!:number;
    skills!:Skills[]
}

export class Skills {
    skill!: string;
}

export class Country{
    id!:number;
    name!:string;
}

export class State{
    id!:number;
    name!:string;
    country!:string;
}

export class City{
    id!:number;
    name!:string;
    state!:string;
}