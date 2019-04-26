import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeActionsComponent } from './challenge-actions.component';


@NgModule({
  declarations: [ChallengeActionsComponent],
  imports: [CommonModule],
  exports: [ChallengeActionsComponent]
})
export class ChallengeActionsModule {}
