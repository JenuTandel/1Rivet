import { RegistrationData } from "./registrationData.model";

export class UserDataAdapter{
    public toResponse(item:any){
        const userdata:RegistrationData =  new RegistrationData();
        userdata.emailId = item.emailId;
        userdata.country = item.country;
        userdata.state = item.state;
        userdata.city = item.city;
        userdata.fullname = item.firstname.concat(" "+item.lastname)
        
        return userdata;
    }
}