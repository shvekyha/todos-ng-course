import { Component, OnInit, ViewChild, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <div [ngStyle]="styles">
      
      <h1 #title>Panel title (click me!)</h1>  

      <ng-container #entry></ng-container>

      <ng-template #template>
        Panel Content is here!
      </ng-template>
    </div>
  `,
  styles: [`
    .panel { width: 200px, height: 200px, border: 1px }
  `]
})
export class PanelComponent implements OnInit {

  @ViewChild('title') title : ElementRef;
  @ViewChild('template') template : TemplateRef<any>;
  @ViewChild('entry', {read: ViewContainerRef}) entry : ViewContainerRef;

  private renderer: Renderer2;
  
  public styles = {
    width: '200px', 
    height: '200px', 
    border: '1px'
  }

  constructor(renderer: Renderer2) { 
    this.renderer = renderer;
  }

  ngOnInit() {
    this.renderer.setStyle(this.title.nativeElement, 'color', 'red');
    this.renderer.listen(this.title.nativeElement, 'click', () => {
      this.entry.clear();
      this.entry.createEmbeddedView(this.template);
    });
  }

}
