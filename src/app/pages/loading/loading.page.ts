import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  [x: string]: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  mostrarLoading(){
    this.presentLoading();
  }

  async presentLoading(){
    const loading=await this.loadingCtrl.create({
      message:"Cargando...",
      duration : 3000,
    })
    await loading.present();
  }

}
