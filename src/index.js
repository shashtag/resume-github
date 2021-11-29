import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { UIProvider } from "./Context/UIContext";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  // const token = process.env.REACT_APP_GRAPHQL_API;
  const token = process.env.REACT_APP_GRAPHQL_API;
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <UIProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </UIProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
