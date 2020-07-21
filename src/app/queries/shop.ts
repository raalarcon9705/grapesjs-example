import gql from 'graphql-tag';

export const SHOP_QUERY = gql`query shop {
  shop {
    name
  }
}`;
