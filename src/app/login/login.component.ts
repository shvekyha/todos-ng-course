import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form class="">
      <label>Username:</label><input type="text">
      <label>Password:</label><input type="password">
      <button type="submit">LOGIN</button>
    </form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
