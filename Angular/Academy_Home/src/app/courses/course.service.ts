import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Course, Pagination } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public serviceUrl = 'http://localhost:3000/';

  public updateData: Subject<Course> = new Subject<Course>();

  constructor(
    private http: HttpClient
  ) { }

  public getCourses(page: any): Observable<any> {
    return this.http.get(`${this.serviceUrl}courseDetails?_page=${page.pageNumber}&_limit=${page.pageSize}`);
    // const url = '//hn.algolia.com/api/v1/search';
    // return this.http.get(url,page).pipe(map((data:any)=>{
    //   debugger
    //   return data.hits
    // }));
  }
  public sendData(data: Course): void {
    this.updateData.next(data);
  }

  public getData(): Observable<Course> {
    return this.updateData.asObservable();
  }
  
  public getCoursesById(id: number): Observable<Course> {
    return this.http.get<Course>(this.serviceUrl + 'courseDetails/' + id);
  }

  public createCourse(Course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.serviceUrl + 'courseDetails'}`, Course);
  }

  public updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.serviceUrl + 'courseDetails'}/${course.id}`, Course);
  }

  public deleteCourse(courseId: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.serviceUrl + 'courseDetails'}/${courseId}`);
  }
}
