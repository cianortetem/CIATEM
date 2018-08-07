import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {

  constructor(public platform: Platform, public fb: Facebook, public afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {
  }

  signupUser(email, password, firstName, lastName): any{
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((newUser) => {
      return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password).then((authenticatedUser) =>{
        let uid = authenticatedUser.user.uid;
        let userObject = {
          uid: uid,
          registeredDate: Date.now(),
          name: firstName + " " + lastName,
          firstName: firstName,
          lastName: lastName,
          email: email,
          photoURL: ""
        };

        newUser.user.updateProfile({
          displayName: firstName + " " + lastName,
          photoURL: ""
        });

        return this.afDB.list('userProfile').update(uid, userObject).then(() => true,
        error => {
          throw new Error(error.message)
        }
       )
      }, error => { 
        throw new Error(error.message)
      })
    }, error => { 
      throw new Error(error.message)
    });
  }

facebookLogin(){
  if (this.platform.is('cordova')){
    return this.fb.login(['email', 'public_profile']).then(res => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.acessTpken);
      return firebase.auth().signInWithCredential(facebookCredential).then(data => {
        console.log(data);
      })
    })

  } else {
    return this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => console.log(res))
  }
}

}
