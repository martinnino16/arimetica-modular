import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbUserModule,
  NbIconModule,
  NbToggleModule,
  NbActionsModule,
  NbSpinnerModule,
  NbDialogModule,
  NbMenuModule,
  NbToastrModule,
  NbThemeModule,
  NbSelectModule,
  NbListModule,
  NbTabsetModule
} from '@nebular/theme';




@NgModule({
  exports: [
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbUserModule,
    NbIconModule,
    NbToggleModule,
    NbActionsModule,
    NbSpinnerModule,
    NbDialogModule,
    NbMenuModule,
    NbToastrModule,
    NbThemeModule,
    NbSelectModule,
    NbListModule,
    NbTabsetModule
  ],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbInputModule,
    NbIconModule,
    NbToggleModule,
    NbActionsModule,
    NbSpinnerModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forChild(),
    NbSelectModule,
    NbListModule,
    NbTabsetModule
  ],
   declarations: [
  ],
})

export class NebularModule{

}