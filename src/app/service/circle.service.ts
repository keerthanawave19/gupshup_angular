import { Observable } from 'rxjs/Rx';
import { CreateCircle } from '../createcircle/createcircle.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import { Circle } from '../model/Circle';
//import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { Subject }    from 'rxjs/Subject';
//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CircleService {

    private selectCircleSource = new Subject<string>();
    private selectMemberSource = new Subject<string>(); 
    constructor(private http: Http) {

    }

    // Observable string streams
    circleSelected$ = this.selectCircleSource.asObservable();
    memberSelected$ = this.selectMemberSource.asObservable();

    public selectCircle(circle: string) {
        this.selectCircleSource.next(circle);
    }

    public selectMember(member: string) {
        this.selectMemberSource.next(member);
    }

    public getCircles(): Observable<any> {
        return this.http.get("assets/gupshup.json")
        .map((res:any) => res.json());
    }

    public getMember(cname: string):Observable<any> {
        return this.http.get("assets/gupshup.json")
        .map((res:any) => {
            let circles = res.json() as any[];
            circles = circles.filter((item) => item.circleName === cname);
            return circles[0].members;
        });
        
    }
    getMemberinbox(member:string)
    { 
        return Observable.of(member);
    }
    saveCircleIn(circle: Circle) {
        //Console.log("inside method");
   //      let body = JSON.stringify(circle);
   // let headers = new Headers({ 'content-type': 'application/json' });
   // let options = new RequestOptions({ headers: headers });

   return this.http.post('http://localhost:8080/v1/api/movie',circle).map((response) => response.json());

    }
}
