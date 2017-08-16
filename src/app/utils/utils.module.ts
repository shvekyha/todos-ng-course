import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoggerService } from "../utils/logger.service";
import { LowPipe } from './low.pipe';
import { MarkerDirective } from './marker.directive';
import { ClassDirective } from './class.directive';
import { IfDirective } from './if.directive';
import { PanelComponent } from './panel.component';

@NgModule({
  imports: [ CommonModule ],
  providers: [LoggerService],
  declarations: [LowPipe, MarkerDirective, ClassDirective, IfDirective, PanelComponent],
  exports: [LowPipe, MarkerDirective, ClassDirective, IfDirective, PanelComponent]
})
export class UtilsModule { }

