import { Component, OnInit } from '@angular/core';
// import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleUp, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  // fafacebook=faFacebook
  // fatwitter=faTwitter
  // falinkedin=faLinkedin
  // fayoutube=faYoutube
  fasend=faEnvelopeCircleCheck
  faangle=faAngleDoubleUp


  ngOnInit(): void {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
