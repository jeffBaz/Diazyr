import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatGridListModule,
  MatListModule,
  MatDividerModule,
  MatTabsModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  DateAdapter,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSliderModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatStepperModule,
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';
import { GetPaginatorIntl } from './international/get-paginator-intl';

const sharedModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  MatDividerModule,
  MatTabsModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSliderModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatStepperModule,
];

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules],
  providers: [
    { provide: MatPaginatorIntl, useValue: new GetPaginatorIntl() }
  ]

})
export class MaterialModule {}
