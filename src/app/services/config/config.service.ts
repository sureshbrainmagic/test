import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // public rootUrl = 'http://addisonsubdealerjson.brainmagicllc.com/';
  public rootUrl = 'https://subdealerjson.addisonreach.co.in/';
  lsLang = 'en';
  constructor(
    private http: HttpClient,
    private menu: MenuController,
  ) { }

  getLang() {
    return localStorage.getItem('lsLang');
  }

  toggleMenu() {
    this.menu.toggle();
  }


  getData(url): Observable<any> {
    const geturl = `${this.rootUrl}${url}`;
    return this.http.get(geturl);
  }

  postData(url, bodyValues): Observable<any> {
    const apiURL = `${this.rootUrl}${url}`;
    return this.http.post(apiURL, bodyValues);
  }

 

}
