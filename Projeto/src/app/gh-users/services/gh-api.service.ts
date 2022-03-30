import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhUser } from '../models/ghUser';
import { GhRep } from '../models/ghRep';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string = 'https://api.github.com/users'

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser> {
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findRepository(username: string): Observable<GhRep[]> {
    return this.http.get<GhRep[]>(`${this.baseUrl}/${username}/repos`)
  }
}
