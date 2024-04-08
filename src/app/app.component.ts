import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @HostListener('window:beforeunload', ['$event'])
  confirmRefresh(event: Event): void {

    event.preventDefault();

    const confirmed = confirm('Are you sure you want to refresh? your information will be lost.');

    if (confirmed) {
      event.returnValue = true;
    } else {
      event.returnValue = false;
    }
  }

}
