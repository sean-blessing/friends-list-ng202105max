import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/model/friend.class';

@Component({
  selector: 'app-friends-manager',
  templateUrl: './friends-manager.component.html',
  styleUrls: ['./friends-manager.component.css']
})
export class FriendsManagerComponent implements OnInit {
  title: string = 'Friends Manager';
  friends: Friend[] = [];
  friend: Friend = new Friend();
  submitBtnTitle: string = 'Save';

  constructor() { }

  ngOnInit(): void {
    let friend1: Friend = new Friend("Dave Grohl", 52, "dave@ff.com", true);
    let friend2: Friend = new Friend("Stan Smiley", 44, "stan@test.com", false);
    let friend3: Friend = new Friend("Julie Banks", 23, "julie@julie.com", true);
    let friend4: Friend = new Friend("Chris Pratt", 42, "chris@marvel.com", true);

    this.friends = [friend1, friend2, friend3, friend4];
  }

  save() {
    // add friend to friends list
    this.friends.push(this.friend);
  }
}
