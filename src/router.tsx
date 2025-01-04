import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/index';
import Search from './pages/search/index';
import Chats from './pages/chats/index';
import Result from './pages/search/result/index';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  { path: '/', element: <Home /> },
  { path: '/search', element: <Search /> },
  { path: '/chats', element: <Chats /> },
  { path: '/result', element: <Result /> },
];

export const router = createBrowserRouter(routes);
