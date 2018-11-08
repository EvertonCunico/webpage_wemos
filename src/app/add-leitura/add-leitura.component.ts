import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Leitura } from '../models/leitura.model';
import { LeituraService } from '../leitura.service';

@Component({
  templateUrl: './add-leitura.component.html'
})
export class AddLeituraComponent {

  leitura: Leitura = new Leitura();

  constructor(private router: Router, private leituraService: LeituraService) { }

  createLeitura(): void {
    this.leituraService.createLeitura(this.leitura)
        .subscribe( data => {
          alert("Leitura criada com sucesso.");
        });

  };

  print(): void {
    alert(this.leitura.nome)
  }

}
