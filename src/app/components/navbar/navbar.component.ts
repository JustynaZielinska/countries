import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/core/services/navigation-service/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
faArrowLeft = faArrowLeft;
isButtonVisible: boolean;
isModalActive: boolean;
navigationSubscription: Subscription;

  constructor(private navigationService: NavigationService) {
   this.navigationSubscription = navigationService.page.subscribe(page => {
     if (page === '/countries' || page === '/page-not-found'){
       this.isButtonVisible = false;
     } else { this.isButtonVisible = true; }
   });
  }

  ngOnInit(): void {
    this.isModalActive = false;
  }

  hideModal(event): void{
    this.isModalActive = event;
  }

  back(): void {
    this.navigationService.back();
  }
}
