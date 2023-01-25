import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit {
  argumentos: any;
  myVal1: string = "";
  constructor(private activeRoute: ActivatedRoute) { }
 
  ngOnInit() {
    this.argumentos=this.activeRoute.snapshot.paramMap.get('id');
    this.myVal1 = 'LUIS';
  }

}
