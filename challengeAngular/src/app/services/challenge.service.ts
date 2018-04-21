import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Http, Response } from '@angular/http';
import { ChallengeModel } from '../models/challenges/challenge.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChallengeService {

  url = 'http://localhost:3000/challenges';

  constructor(private http: Http) { }

  getChallengeList(): Observable<ChallengeModel[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json() as ChallengeModel[])
      .catch((error: any) => Observable.throw(error));
  }

}
