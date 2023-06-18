import * as React from 'react';
import { getDataFromTree } from '@apollo/client/react/ssr';
import * as ReactDOMServer from 'react-dom/server';
import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/node';
import createEmotionCache from './src/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { renderToString } from 'react-dom/server';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: 'https://flyby-gateway.herokuapp.com/', // from Apollo's Voyage tutorial series (https://www.apollographql.com/tutorials/voyage-part1/)
      //headers: request.headers,
      credentials: request.credentials ?? 'include', // or "same-origin" if your backend server is the same domain
    }),
  });

  function MuiRemixServer() {
    return (
      <CacheProvider value={cache}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>
    );
  }

  const App = (
    <ApolloProvider client={client}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  );

  // TODO: update everything below this line
  return getDataFromTree(App).then(() => {
    // Extract the entirety of the Apollo Client cache's current state
    const initialState = client.extract();

    // Render the component to a string.
    const html = ReactDOMServer.renderToString(<MuiRemixServer />);

    // Grab the CSS from emotion
    const { styles } = extractCriticalToChunks(html);

    let stylesHTML = '';

    styles.forEach(({ key, ids, css }) => {
      const emotionKey = `${key} ${ids.join(' ')}`;
      const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
      stylesHTML = `${stylesHTML}${newStyleTag}`;
    });

    const markup = renderToString(
      <>
        {App}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              initialState,
              // Add the Emotion style tags after the insertion point meta tag
            ).replace(
              /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
              `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`,
            )}`, // The replace call escapes the < character to prevent cross-site scripting attacks that are possible via the presence of </script> in a string literal
          }}
        />
      </>,
    );

    responseHeaders.set('Content-Type', 'text/html');

    return new Response('<!DOCTYPE html>' + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  });
}
