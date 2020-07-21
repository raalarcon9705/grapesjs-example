import { Component } from '@angular/core';
import { SHOP_QUERY } from './queries/shop';
import { GraphqlService, GQLShop, GQLQueryRoot } from './graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-apollo-client';
  constructor(private graphql: GraphqlService) {}

  fetchShop(): void {
    this.graphql.query<GQLQueryRoot>(SHOP_QUERY).subscribe(res => console.log(res.data.shop));
  }
}
