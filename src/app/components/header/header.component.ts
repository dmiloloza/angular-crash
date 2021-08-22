import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UiService} from '../../services/ui.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Results';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
    this.showAddTask = false;
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    //this will be true on index page '/'
    //app-button component will show only on index page
    return this.router.url === route;
  }
}
