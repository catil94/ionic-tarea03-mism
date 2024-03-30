import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes:Observable<any> | undefined;
  publisher:string = 'todos';


  constructor(private DataService:DataService) { }

  ngOnInit() {
    this.superHeroes=this.DataService.getHeroes();
  }

  segmentChanged(event:any){
    //console.log(event);
    this.publisher=event.detail.value;
  }

}
