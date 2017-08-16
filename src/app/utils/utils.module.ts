import { NgModule } from '@angular/core';
import { LoggerService } from "../utils/logger.service";
import { LowPipe } from './low.pipe';
import { MarkerDirective } from './marker.directive';
import { ClassDirective } from './class.directive';

@NgModule({
  providers: [LoggerService],
  declarations: [LowPipe, MarkerDirective, ClassDirective],
  exports: [LowPipe, MarkerDirective, ClassDirective]
})
export class UtilsModule { }

