import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  uploadFile(formData) {
    console.log(formData);
    // return this.http.post('http://addisonsubdealerjson.brainmagicllc.com/Api/Upload/PostUserImage', formData);
    return this.http.post('http://subdealerjson.addisonreach.co.in/Api/Upload/PostUserImage', formData);
  }
}
