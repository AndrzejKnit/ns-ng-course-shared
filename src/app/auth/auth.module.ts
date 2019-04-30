import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: AuthComponent
            }
        ]
        ),
        SharedModule,
        ReactiveFormsModule
        ]
})
export class AuthModule {}
