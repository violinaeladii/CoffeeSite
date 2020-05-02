import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor() {
    setInterval(() => {
      this.message = new Date().toLocaleTimeString() ;
    }, 1000);
  }

  ngOnInit(): void {
  }
}
