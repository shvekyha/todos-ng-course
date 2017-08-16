import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="checkbox" (change)="flag = !flag">

    <!-- the next lines are the same thing, the * of *ngIf creates a template wrapping the element -->
    <!--h1 *ngIf="flag">Content of H1</h1-->
    
    <!--ng-template [ngIf]="flag">
      <h1>Content of H1</h1>
    </ng-template-->

    <!--h1 *appIf="flag">Content of H1</h1-->

    <!--app-todolist></app-todolist-->
    
    <app-panel></app-panel>

  `,
})
export class AppComponent {
  flag = false;
}
