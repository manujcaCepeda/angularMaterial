import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav, MatDrawer } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  users: Observable<User[]>;
  @ViewChild(MatDrawer) sidenav: MatDrawer;

  constructor(zone: NgZone, private userService: UserService, private router: Router) {
    this.mediaMatcher.addListener(mq =>
      zone.run(() => this.mediaMatcher = mq));
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    // this.users.subscribe(data => {   //Elimino por que en main-content.component.ts agregar  if (!id) id = 1;
    //   console.log(data);
    //   if (data.length > 0) this.router.navigate(['/contactmanager', data[0].id]);
    // });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall())
        this.sidenav.close();
    })
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
