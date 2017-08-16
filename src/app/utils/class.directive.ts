import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective implements OnInit{

  private element: ElementRef;
  private renderer: Renderer2;

  @Input() 
  set appClass(obj){
    //todo: complete implementation - add class only if this.appClass.active==true
    Object.keys(obj).forEach(name => {
      this.renderer.addClass(this.element.nativeElement, name);
    });
  }

  constructor(element: ElementRef, renderer: Renderer2) {
    this.element = element;
    this.renderer = renderer;
    //console.log(this.appClass);  //this wont work - appClass is now undefined because NG didnt initialize it yet
  }

  ngOnInit(){
    //console.log('this.appClass: '+this.appClass); //this will work if there's a getter for the this.appClass
  }
}
