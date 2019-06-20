import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the GymDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gym-details',
  templateUrl: 'gym-details.html',
})
export class GymDetailsPage {
  private details: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.details = navParams.get('gym');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GymDetailsPage');
  }

}
