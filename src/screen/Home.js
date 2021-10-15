import { HashRouter as Router, Route } from "react-router-dom";
import { logUserOut } from "../apollo";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { COFFE_SHOP_FRAGMENT } from "../fragments";

const SEE_COFFEE_SHOPS_QUERY = gql`
  query seeCoffeeShops($offset: Int!) {
    seeCoffeeShops(offset: $offset) {
      ...CoffeFragment
    }
  }
  ${COFFE_SHOP_FRAGMENT}
`;

const Container = styled.div``;

function Home() {
  const { data, loading, refetch, fetchMore } = useQuery(
    SEE_COFFEE_SHOPS_QUERY,
    {
      variables: {
        offset: 0,
      },
    }
  );

  console.log(data);

  return (
    <div>
      <Router>
        <Route>
          <button onClick={() => logUserOut()}>logOut</button>
        </Route>
      </Router>
    </div>
  );
}

export default Home;
