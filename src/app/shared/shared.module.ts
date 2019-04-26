import { NgModule } from '@angular/core';
import { ActionBarComponent } from './ui/action-bar/action-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [ActionBarComponent],
  exports: [ActionBarComponent]
})
export class SharedModule {}
