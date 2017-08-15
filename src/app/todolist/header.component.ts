import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1>{{title}}</h1>
      <input class="new-todo"
           placeholder="What needs to be done?"
           #input
           autofocus
           (keydown.enter)="itemAdded.emit(input.value)"
           >
    </header>
  `,
  styles: []
})
export class HeaderComponent {

  @Input() title:string;

  @Output() itemAdded = new EventEmitter<string>();
}
