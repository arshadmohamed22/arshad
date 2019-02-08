import { Component, Inject, HostListener, OnInit, OnDestroy } from '@angular/core';

import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
	windowScrolled: boolean;
    
    constructor() {}    
    
    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true); 
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (): void => {
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 400) {
            this.windowScrolled = true;
        }
        if (number < 400) {
            this.windowScrolled = false;
        }
    }

    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }

}
