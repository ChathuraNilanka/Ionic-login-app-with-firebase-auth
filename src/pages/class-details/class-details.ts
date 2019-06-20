import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-details',
  templateUrl: 'class-details.html',
})
export class ClassDetailsPage {
  private details: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.details = navParams.get('clz');
    console.log(this.details.$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassDetailsPage');
  }

}
