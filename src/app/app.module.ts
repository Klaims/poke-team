import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { CreateComponent } from './create/create.component';
import { ImportComponent } from './import/import.component';
import { SelectComponent } from './select/select.component';
import { PokemonService } from './services/pokemon.service';
import { SelectedComponent } from './selected/selected.component';
import { BoxComponent } from './box/box.component';

const appRoutes : Routes = [

  {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'import', component: ImportComponent},
  {path: 'create/select', component: SelectComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CreateComponent,
    ImportComponent,
    SelectComponent,
    SelectedComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
