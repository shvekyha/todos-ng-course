import { NgModule } from '@angular/core';
import { LoggerService } from "../utils/logger.service";
import { LowPipe } from './low.pipe';
import { MarkerDirective } from './marker.directive';

@NgModule({
  providers: [LoggerService],
  declarations: [LowPipe, MarkerDirective],
  exports: [LowPipe, MarkerDirective]
})
export class UtilsModule { }

