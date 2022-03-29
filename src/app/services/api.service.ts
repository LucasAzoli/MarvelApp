import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5'
import { Characters, Character } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = localStorage.getItem('key')
  private ts = new Date().getTime();

  private hash: string = '';

  constructor( private http:HttpClient ) {
    if (this.ts && this.key && environment.myPublicKey) {
      this.hash = this.hashCode(this.ts,this.key,environment.myPublicKey)
    }
  }

  public getCharacters(num:number):Observable<Characters> {
    if (num) {
      return this.http.get<Characters>(environment.apiUrl+'/characters?limit=60&orderBy=name&offset='+num+this.hash)
    }
    return this.http.get<Characters>(environment.apiUrl+'/characters?limit=60&orderBy=name'+this.hash)
  }

  public getCharactersById(id:string):Observable<Characters> {
    if (id) {
      return this.http.get<Characters>(environment.apiUrl+'/characters/'+id+'?limit=60&orderBy=name'+this.hash)
    }
    return this.http.get<Characters>(environment.apiUrl+'/characters?limit=60&orderBy=name'+this.hash)
  }

  public getCharactersByName(name:string):Observable<Characters> {
    if (name) {
      return this.http.get<Characters>(environment.apiUrl+'/characters?limit=60&nameStartsWith='+name+this.hash)
    }
    return this.http.get<Characters>(environment.apiUrl+'/characters?limit=60&orderBy=name'+this.hash)
  }

  hashCode(ts: number,key: string, publicKey: string ): string {
    let hash = '&ts='+this.ts+'&apikey='+environment.myPublicKey+'&hash='+Md5.hashAsciiStr(ts+key+publicKey)
    return hash
  }
}
