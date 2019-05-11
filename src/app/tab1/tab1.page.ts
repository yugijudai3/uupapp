import { Component } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  post:{
    username: string,
    message: string,
    createddate: any
  };
  message: string;
  
  constructor(private alertCtrl: AlertController){}
  
  posts:{username: string, message: string, createddate: any}[]
  =[{
    username: "大根",
    message: "お前を殺す",
    createddate: "10分前"
  },{
    username: "MSZ",
    message: "お前を殺す",
    createddate: "5分前"
  }];
  
  addPost(){
    this.post={
      username: "遊戯",
      message: this.message,
      createddate: "数秒前"
    };
    this.posts.push(this.post);
    this.message="";
  }
  
  async presentPrompt(index: number){
    const alert = await this.alertCtrl.create({
      header: "メッセージ編集",
      inputs:[{
        name: "message",
        type: "text",
        placeholder: "メッセージ"
      }],
      buttons:[{
        text: "キャンセル",
        role: "cancel",
        handler: () => {console.log("キャンセルが選択されました");}
      },
      {
        text: "更新",
        handler: data => {
          console.log(data);
          this.posts[index].message = data.message;
        }
      }]
    });
    await alert.present();
  }
  
  deletePost(index: number){
    this.posts.splice(index, 1);
  }
}
