import { NgModule } from '@angular/core';
import { LoggerService } from "../utils/logger.service";
import { LowPipe } from './low.pipe';
import { MarkerDirective } from './marker.directive';
import { ClassDirective } from './class.directive';
import { IfDirective } from './if.directive';

@NgModule({
  providers: [LoggerService],
  declarations: [LowPipe, MarkerDirective, ClassDirective, IfDirective],
  exports: [LowPipe, MarkerDirective, ClassDirective, IfDirective]
})
export class UtilsModule { }

