import { RegistrationData } from "./registrationData.model";

export class UserDataAdapter{
    public toResponse(item:any){
        const userdata:RegistrationData =  new RegistrationData();
        userdata.id = item.id;
        userdata.firstname = item.firstname;
        userdata.lastname = item.lastname;
        userdata.emailId = item.emailId;
        userdata.country = item.country;
        userdata.state = item.state;
        userdata.city = item.city;
        userdata.phoneno = item.phoneno;
        userdata.skills = item.skills;
        userdata.fullname = item.firstname.concat(" "+item.lastname)
        
        return userdata;
    }
}