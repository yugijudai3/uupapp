import { Component, OnInit } from '@angular/core';
import { AlertController,ToastController } from "@ionic/angular";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Post } from '../models/post';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  message: string;
  post: Post;
  posts: Post[];

  postscollection: AngularFirestoreCollection;

  ngOnInit(){
    this.getPosts();
  }
  
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private afStore: AngularFirestore,
    private afAuth: AngularFireAuth
    ){}
  
  addPost(){
    this.post = {
      id: "",
      userName: this.afAuth.auth.currentUser.displayName,
      message: this.message,
      created: firebase.firestore.FieldValue.serverTimestamp()
    };
    
  }
  
 
  deletePost(index: number){
    this.posts.splice(index, 1);
  }
}
