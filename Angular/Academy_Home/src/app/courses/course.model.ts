export class Course {
    public id?: number;
    public courseName?: string;
    public courseDetails?: string;
    public courseDuration?: string;
    public courseImageString?:string;
    public courseImageName?:string;
    public hits?:any[];
}
export class Pagination{
    public pageSize!:number;
    public pageNumber!:number;
}