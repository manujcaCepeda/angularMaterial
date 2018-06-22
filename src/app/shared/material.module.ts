import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatIconModule,
  MatSidenavModule, MatListModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
