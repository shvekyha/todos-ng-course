import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <section class="main">
      <input class="toggle-all"
            type="checkbox">
      <app-list></app-list>
    </section>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
