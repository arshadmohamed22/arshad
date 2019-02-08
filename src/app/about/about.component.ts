import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

import { simpleFadeAnimation } from '../animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    simpleFadeAnimation
  ]
})
export class AboutComponent implements OnInit {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.ownerDocument.body.classList.remove("changeColor")

  }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    
  }
  
  ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
  }

  
  scroll = (): void => {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      $("#down-arrow").removeClass("increase-opacity");
      $("#down-arrow").addClass("decrease-opacity");
    }
    if (number < 10) {
      $("#down-arrow").removeClass("decrease-opacity");
      $("#down-arrow").addClass("increase-opacity");
    }
    if ($("#1").offset().top < 600) {
      $("#1").removeClass("decrease-opacity");
      $("#1").addClass("increase-opacity");
      $("#text-one").addClass("grow-right");
    }
    if ($("#2").offset().top < 600) {
      $("#2").removeClass("decrease-opacity");
      $("#2").addClass("increase-opacity");
      $("#text-two").addClass("grow-left");
    }
    if ($("#3").offset().top < 600) {
      $("#3").removeClass("decrease-opacity");
      $("#3").addClass("increase-opacity");
      $("#text-three").addClass("grow-right");
    }
    if ($("#4").offset().top < 600) {
      $("#4").removeClass("decrease-opacity");
      $("#4").addClass("increase-opacity");
      $("#text-four").addClass("grow-left");
    }
    if ($("#video-container").offset().top < 20) {
      $("#background-video").removeClass("decrease-opacity");
      $("#background-video").addClass("increase-opacity-half");
      $("#video-text").removeClass("decrease-opacity");
      $("#video-text").addClass("increase-opacity");
    }
    if ($("#video-container").offset().top > 30) {
      $("#background-video").removeClass("increase-opacity-half");
      $("#background-video").addClass("decrease-opacity");
      $("#video-text").removeClass("increase-opacity");
      $("#video-text").addClass("decrease-opacity");
    }  
  };

}
