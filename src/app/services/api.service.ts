import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserInterface } from '../intefaces/User'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public user$: BehaviorSubject<UserInterface> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get('google.com').toPromise();
  }

  login(username: string) {
    // call API
    const user = {username};
    this.user$.next(user);
  }

  logout() {
    this.user$.next(null);
  }
}
