import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Tab1Page } from '../tab1/tab1.page';
import { async } from 'q';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  login: {
    email: string;
    password: string;
  }={
    email: "",
    password: ""
  };

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  userLogin(){
    this.afAuth.auth.signInWithEmailAndPassword(this.login.email, this.login.password)
    .then(async user => {
      const toast = await this.toastCtrl.create({
        message: "ログインしました",
        duration: 3000
      });
      await toast.present();
      this.router.navigate(["/tab1"]);
    })
    .catch(async error => {
      const toast = await this.toastCtrl.create({
        message: error.toString(),
        duration: 3000
      });
      await toast.present();
    });
  }

  gotoSignup(){
    this.router.navigate(["/signup"]);
  }

}
