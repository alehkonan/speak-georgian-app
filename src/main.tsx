import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { queryClient } from './cache/client';
import { initI18 } from './i18n';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const app = (
  <React.StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>
);

initI18().then(() => root.render(app));
