import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private AngularFireAuth: AngularFireAuth,
              public http: HttpClient) {
      
          this.user = AngularFireAuth.authState;
  }

  createUser(user: User){
    return this.AngularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }
}
