import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  @HostBinding('style.background-color')
  public bgColor: string;

  @Input()
  public appMarker: string;

  @Output()
  public onMark = new EventEmitter();

  constructor() { 
    this.bgColor = 'red';
  }

  @HostListener('mouseenter')
  public mark(){
    this.bgColor = this.appMarker;
    this.onMark.emit();
  }

  @HostListener('mouseout')
  public clear(){
    this.bgColor = '';
  }

}
