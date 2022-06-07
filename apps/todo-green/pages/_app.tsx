import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, Container } from "@chakra-ui/react";

import type { AppProps } from "next/app";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Container centerContent>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
