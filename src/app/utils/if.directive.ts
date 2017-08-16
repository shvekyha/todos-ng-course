import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective implements OnInit{

  private template: TemplateRef<any>;
  private entry: ViewContainerRef;

  @Input() 
  set appIf(flag: boolean){
    //console.log(flag);
    if (flag){
      this.entry.createEmbeddedView(this.template);
    } else{
      this.entry.clear();
    }
  }
  
  constructor(template: TemplateRef<any>, entry: ViewContainerRef) { 
    this.template = template;
    this.entry = entry;
  }

  ngOnInit(){
    
  }
}
