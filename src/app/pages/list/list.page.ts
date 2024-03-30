import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>|undefined;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.usuarios=this.dataService.getUsuario();
    //this.usuarios=this.dataService.getUsuario();
  
  }

  favorite(user:any){
    console.log('favorite',user);
  }
  share(user:any){
    console.log('share',user);
  }


}
