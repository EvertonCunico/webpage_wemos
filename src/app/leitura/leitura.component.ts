import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Leitura } from '../models/leitura.model';
import { LeituraService } from '../leitura.service';

@Component({
  selector: 'app-leitura',
  templateUrl: './leitura.component.html',
  styleUrls: []
})
export class LeituraComponent implements OnInit {

  leituras: Leitura[] = new Array<Leitura>();

  constructor(private router: Router, private leituraService: LeituraService) { }

  ngOnInit() {
    this.getLeituras();
  }

  getLeituras() :void{
    this.leituraService.getLeituras()
      .subscribe( data => {
        this.leituras = data.leituras as Leitura[];
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  deleteLeitura(leitura: Leitura): void {
    this.leituraService.deleteLeitura(leitura)
      .subscribe( data => {
        this.leituras = this.leituras.filter(u => u !== leitura);
        alert("Deletou com sucesso!");
        this.getLeituras();
      })
  };

}
