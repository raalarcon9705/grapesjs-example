export interface GraphQLConfig {
  uri: string;
  headers: { [header: string]: string };
}


export const GRAPHQL_CONFIG: GraphQLConfig = {
  uri: 'https://example.com/graphql',
  headers: {}
}
