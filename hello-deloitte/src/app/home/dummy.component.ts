import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dummy',
  template: `<h1>This is the dummy component</h1>
        <p>Super cool apps with Angular and Ionic</p>
    `,
  styles: [
      `p{
      color: deeppink
    }`]
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
