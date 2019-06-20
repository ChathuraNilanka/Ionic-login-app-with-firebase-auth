import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymDetailsPage } from './gym-details';

@NgModule({
  declarations: [
    GymDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GymDetailsPage),
  ],
})
export class GymDetailsPageModule {}
