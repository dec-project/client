import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/index';
import SearchPage from './pages/search/index';
import ChatsPage from './pages/chats/index';
import TripPage from './pages/trip/index';
import DetailPage from './pages/trip/detail/index';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  { path: '/', element: <HomePage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/chats', element: <ChatsPage /> },
  { path: '/trip/:calendarId', element: <TripPage /> },
  { path: '/trip/:id/detail', element: <DetailPage /> },
];

export const router = createBrowserRouter(routes);
