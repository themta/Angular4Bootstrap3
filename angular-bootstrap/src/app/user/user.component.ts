import { Observable } from 'rxjs/Rx';
import { User } from './User';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.loadAll();
  }
}
