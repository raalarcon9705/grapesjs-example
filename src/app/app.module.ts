import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GRAPHQL_CONFIG } from './graphql';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './componensts/results/results.component';
import { EditorComponent } from './componensts/editor/editor.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: GRAPHQL_CONFIG,
      useValue: {
        uri: 'https://elroisupplies.myshopify.com/api/2020-04/graphql',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'x-shopify-storefront-access-token': '35ca320bd94776cba607483b85333050'
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
