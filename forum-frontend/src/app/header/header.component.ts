import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ClickOutsideDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1, 1)',
        })
      ),
      state(
        'close',
        style({
          opacity: 0,
          transform: 'scale(0.95, 0.95)',
        })
      ),
      transition('open => closed', [animate('75ms ease-in')]),
      transition('closed => open', [animate('100ms ease-out')]),
    ]),
  ],
})
export class HeaderComponent {
  isUserDropDownOpen = false;

  public userMenuClicked() {
    return (this.isUserDropDownOpen = !this.isUserDropDownOpen);
  }
  public userMenuClickedOutside() {
    return (this.isUserDropDownOpen = false);
  }
}
