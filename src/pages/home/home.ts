import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { GymProvider } from '../../providers/gym/gym';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gyms: any;
  private db: any;
  model: any = {};
  
  constructor(public navCtrl: NavController, public gymP: GymProvider) {
    this.db = firebase.firestore();
    //this.loadGyms();
    this.gymP.getAllGymDetails('gyms').then(x=>{
      console.log('got it',x);
      this.gyms = x;
    });
  }

  itemTapped(gym) {
    console.log(gym.$key);
    this.navCtrl.push('GymDetailsPage', {
      gym: gym
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.loadGyms();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  loadGyms(){
    this.gymP.getAllGymDetails('gyms').then(x=>{
      this.gyms = x;
  });
  }
}


