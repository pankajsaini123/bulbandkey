import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _http: HttpClient) { }

  public getPhotos() {
    return this._http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=cakes&safe_search=1&api_key=26bad7c569af57baf3040fa906d0b873&nojsoncallback=1&format=json&per_page=30`);
}
public saveDetail(data: any){
  localStorage.setItem('currentImage', JSON.stringify(data));
}
public getDetail(){
  return JSON.parse(localStorage.getItem('currentImage'));
}

public saveReview(data: any){
  localStorage.setItem('review',JSON.stringify(data));
}
public getReview(){
 return JSON.parse(localStorage.getItem('review'));
}

}
