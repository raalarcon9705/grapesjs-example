import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GRAPHQL_CONFIG } from './graphql';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
