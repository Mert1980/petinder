import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _date:Date;

  constructor() {
    this._date = new Date()
  }

  get date(): Date {
    return this._date;
  }

  ngOnInit(): void {
  }

}
