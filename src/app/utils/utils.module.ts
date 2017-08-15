import { NgModule } from '@angular/core';
import { LoggerService } from "../utils/logger.service";
import { LowPipe } from './low.pipe';

@NgModule({
  providers: [LoggerService],
  declarations: [LowPipe],
  exports: [LowPipe]
})
export class UtilsModule { }

