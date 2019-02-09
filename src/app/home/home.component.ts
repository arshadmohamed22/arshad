import { Component, HostListener, ElementRef, ViewEncapsulation, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Roles } from './roles';
import { Icons } from './icons';

import { simpleFadeAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    simpleFadeAnimation
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  
  role = Roles[0];
  icon = Icons[0];

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.ownerDocument.body.classList.remove("changeColor")
  } 

  ngOnInit() {
    
    function delay (URL) {
      setTimeout( function() { window.location = URL }, 500 );
    }

    window.addEventListener('scroll', this.scroll, true); 
  	var i = 0;
  	setInterval(() => {
  		i++;
  		if (i==4) {i = 0};
  		this.role = Roles[i];
      this.icon = Icons[i];
  	}, 3500);

  }
  
  ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
  }

  
  scroll = (): void => {
    var infoDiv = $('#info');
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      $("#down-arrow").removeClass("increase-opacity");
      $("#down-arrow").addClass("decrease-opacity");
    }
    if (number < 10) {
      $("#down-arrow").removeClass("decrease-opacity");
      $("#down-arrow").addClass("increase-opacity");
    }
    if ($("#info").offset().top < 400) {
      this.elRef.nativeElement.ownerDocument.body.classList.add("changeColor")
      $(".info-text").delay(500).fadeIn("slow");
    }
    if ($("#info").offset().top > 400 || (number > 1000)) {
       this.elRef.nativeElement.ownerDocument.body.classList.remove("changeColor")
    }
    if ($("#video").offset().top < 20) {
      $("#background-video").removeClass("decrease-opacity");
      $("#background-video").addClass("increase-opacity-half");
      $("#video-text").removeClass("decrease-opacity");
      $("#video-text").addClass("increase-opacity");
    }
    if ($("#video").offset().top > 100) {
      $("#background-video").removeClass("increase-opacity-half");
      $("#background-video").addClass("decrease-opacity");
      $("#video-text").removeClass("increase-opacity");
      $("#video-text").addClass("decrease-opacity");
    }
  };
}