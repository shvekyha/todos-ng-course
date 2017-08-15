import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
     <input class="toggle-all" type="checkbox">
  `,
  styles: []
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
