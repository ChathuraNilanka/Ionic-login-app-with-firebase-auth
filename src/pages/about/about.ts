import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Class1Provider } from '../../providers/class1/class1';

@Component({
  selector: 'page-home',
  templateUrl: 'about.html'
})
export class AboutPage {

  classes: any;
  private db: any;
  model: any = {};
  
  constructor(public navCtrl: NavController, public classP:Class1Provider) {
    this.db = firebase.firestore();
    this.classP.getAllClassDetails('classes').then(x=>{
      console.log('got it',x);
      this.classes = x;
    });
  }

  itemTapped(clz) {
    console.log(clz);
    this.navCtrl.push('ClassDetailsPage', {
      clz: clz
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.loadClasses();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  loadClasses(){
    this.classP.getAllClassDetails('classes').then(x=>{
      console.log('got it',x);
      this.classes = x;
    });
  }

}


