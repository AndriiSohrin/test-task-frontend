import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: any;

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(value => this.userList = value.users);
  }

  ngOnInit(): void {
  }

}
