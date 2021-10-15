import { gql } from "@apollo/client";

export const COFFE_SHOP_FRAGMENT = gql`
  fragment CoffeFragment on CoffeeShop {
    id
    name
    latitude
    longitude
    user {
      id
      username
      avatar
    }
    photos {
      id
      url
    }
    categorys {
      id
      name
      slug
    }
    createdAt
    updatedAt
  }
`;
