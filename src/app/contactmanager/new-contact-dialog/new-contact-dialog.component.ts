import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../models/user';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {

  user: User;
  avatars = [
    "svg-1", "svg-2", "svg-3", "svg-4"
  ];
  name = new FormControl('', [Validators.required]);//, Validators.email]);

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>, private userService:UserService) { }

  ngOnInit() {
    this.user = new User();
  }



  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  save() {
    this.userService.addUser(this.user)
    .then(user => {
      this.dialogRef.close(this.user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
