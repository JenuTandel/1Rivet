import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public serviceUrl = 'http://localhost:3000/';

  public updateData: BehaviorSubject<Course> = new BehaviorSubject<Course>(new Course());

  constructor(
    private http: HttpClient
  ) { }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.serviceUrl + 'courseDetails');
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
