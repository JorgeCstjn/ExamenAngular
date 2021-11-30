import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocheComponent } from './coche/coche.component';
import { ListadoCocheComponent } from './examenAngular/listado-coche/listado-coche.component';
import { CochesFormComponent } from './coches-form/coches-form.component';
import { InterfazComponent } from './interfaz/interfaz.component';

@NgModule({
  declarations: [
    AppComponent,
    CocheComponent,
    ListadoCocheComponent,
    CochesFormComponent,
    InterfazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
