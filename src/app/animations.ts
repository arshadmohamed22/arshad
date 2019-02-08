import {
  trigger,
  state,
  style,
  animate,
  query,
  animateChild,
  group,
  transition
} from '@angular/animations';

export const slideInAnimation =
 trigger('routeAnimations', [
  transition('HomePage <=> AboutPage', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);

export const simpleFadeAnimation =
  // the fade-in/fade-out animation.
  trigger('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    state('in', style({opacity: 1})),
    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
      style({opacity: 0}),
      animate('700ms ease-in')
    ]),
    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave',
      animate(0, style({opacity: 0.3}))),
  ])