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

  filtro: string;

  constructor(private router: Router, private leituraService: LeituraService) { }

  ngOnInit() {
    this.getLeituras();
  }

  filterUser(leitura: Leitura) {
    return leitura.nome.indexOf(this.filtro) > -1;
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
        alert("Deletou com sucesso!");
        this.getLeituras();
      }, error => {
        this.getLeituras();
      });
  };

}
