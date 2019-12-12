import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { user } from '../models/user.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  users:user[]=[];
  userSubject=new Subject<user[]>();
  emitUsers() {
    this.userSubject.next(this.users);
  }
  constructor() { 
    
  }
  createNewUser(User:user) {
    //firebase.database().ref('/users/').push( User);
    firebase.auth().useDeviceLanguage();
    console.log(User.email)
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(User.email, User.password).then(
          () => {
                    
            //resolve();
          },
          (error) => {
            reject(error);
          }
        );
        firebase.auth().onAuthStateChanged((user) =>{
          if (user) {
            firebase.auth().currentUser.updateProfile(
              {
              displayName: User.nom + " "+ User.prenom
              }).then();
              firebase.auth().currentUser.sendEmailVerification().then();
          } else {
            // No user is signed in.
          }
        });
        
       
       
     
        resolve();
      }

    );
}
signInUser(User:user) {
  firebase.auth().languageCode='fr'
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(User.email, User.password).then(
        () => {
          if(!firebase.auth().currentUser.emailVerified){
            
            resolve('not verified')
          }else{
            console.log( firebase.auth().currentUser.toJSON());        

            resolve('succes');
          }
         
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}
signOutUser() {
  firebase.auth().signOut();
}
}
