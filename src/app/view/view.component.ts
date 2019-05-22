import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  photo: any;
  name: string;
  stars: any;
  comment: string;

  constructor(public router:Router,public activatedRouter:ActivatedRoute,public imageservice: ImageService, public toast: ToastrManager) { }

  ngOnInit() {
    this.photo = this.imageservice.getDetail();
    
  }

  addFeedback = () => {
    if (!this.name){
      this.toast.errorToastr("name required")
    } else if(!this.stars) {
      this.toast.errorToastr('Stars required')
    } else if (!this.comment) {
      this.toast.errorToastr('comment required')
    } else {
      let data = {
        name: this.name,
        stars: this.stars,
        comment: this.comment,
        photo: this.photo
      }
     this.imageservice.saveReview(data)
     this.toast.successToastr("reviwed")
      this.router.navigate(['/'])
    }
  }

}
