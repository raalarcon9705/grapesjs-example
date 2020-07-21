import { Injectable, Inject } from '@angular/core';
import { GRAPHQL_CONFIG, GraphQLConfig } from './config';
import { HttpClient } from '@angular/common/http';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { GQLQueryRoot } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(@Inject(GRAPHQL_CONFIG) private config: GraphQLConfig, private http: HttpClient) { }

  query<T = GQLQueryRoot>(gql: DocumentNode, variables?: { [variable: string ]: any }): Observable<GQLResponse<T>> {
    const { loc: { source: { body } } } = gql;
    const query = body;
    return this.http.post<GQLResponse<T>>(this.config.uri, { query, variables }, { headers: this.config.headers});
  }

  mutation<T = GQLQueryRoot>(gql: DocumentNode, variables?: { [variable: string ]: any }): Observable<GQLResponse<T>> {
    const { loc: { source: { body } } } = gql;
    const mutation = body;
    return this.http.post<GQLResponse<T>>(this.config.uri, { mutation, variables }, { headers: this.config.headers});
  }
}

interface GQLResponse<T> {
  data: T
}
