import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

/*
  Generated class for the GymProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GymProvider {

  test:any;
  gyms: any;
  private db: any;
  model: any = {};

  constructor() {
    console.log('Hello GymProvider Provider');
    this.db = firebase.firestore();
    this.loadGyms();
  }

  loadGyms(){
    this.getAllGymDetails("gyms").then((e)=>{
      this.gyms = e;
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

  getAllGymDetails(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    console.log(obj)
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    console.log("Document data:", arr);
                    resolve(arr);
                } else {
                    console.log("No such document!");
                    resolve(null);
                }


            })
            .catch((error: any) => {
                reject(error);
            });
    });
}
}
