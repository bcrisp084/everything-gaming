import "@/styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import { useSSR } from "@nextui-org/react";
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphql-errors", graphQLErrors);
    console.log("network-error", networkError);
  },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const darkTheme = createTheme({
  type: "dark",
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
});

export default function App({ Component, pageProps }) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <ApolloProvider client={client}>
        <NextUIProvider theme={darkTheme} isBrowser={isBrowser}>
          <Component {...pageProps} />
        </NextUIProvider>
      </ApolloProvider>
    )
  );
}
