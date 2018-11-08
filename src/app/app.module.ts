import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeituraComponent } from './leitura/leitura.component';
import { LeituraService } from './leitura.service';
import { AddLeituraComponent } from './add-leitura/add-leitura.component';
import { HttpClientModule } from "@angular/common/http";
import { GrdFilterPipe } from './grd-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeituraComponent,
    AddLeituraComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LeituraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
