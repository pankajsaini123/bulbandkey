import { Component, OnInit } from '@angular/core';
import { ImageService } from './../image.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: any;
  pageCount: number = 30;
  review: any;
  p: number = 1;
  loading: boolean = false;

  constructor(private imageservice: ImageService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  this.getImages()
  this.getReview()


  }

  public getImages = () => {
    this.loading = true;
    this.images = '';
    this.imageservice.getPhotos().subscribe((apiResponse: any) => {
      this.images = apiResponse.photos.photo;    
      this.loading = false;
    })
  }

  public goToReview =  (image: any) => {    
     if (this.images.indexOf(image) != -1) 
      this.imageservice.saveDetail(image)
      this.router.navigate([`/view/${image.id}`])
  }

  public getReview = () => {
     this.review =  this.imageservice.getReview()
  }

}
