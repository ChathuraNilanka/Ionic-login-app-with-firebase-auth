import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class Class1Provider {

  classes: any;
  private db: any;
  model: any = {};
  
  constructor() {
    this.db = firebase.firestore();
    this.loadClasses();
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.loadClasses();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();

    }, 2000);

    console.log("Refreshed");
  }

  loadClasses(){
    this.getAllClassDetails("classes").then((e)=>{
      this.classes = e;
  });
  }

  getAllClassDetails(collection: string): Promise<any> {
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
