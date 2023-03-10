import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public messageForm: FormGroup = new FormGroup(null);
  constructor() { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
  }

}
