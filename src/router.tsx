import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/index';
import SearchPage from './pages/search/index';
import ChatsPage from './pages/chats/index';
import TripPage from './pages/trip/index';
import Navbar from './common/components/navbar';
import MyPage from './pages/my/index';
import TripDetailPage from './pages/trip/detail/index';
import ChatRoom from './pages/chats/room';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <Navbar />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/chats', element: <ChatsPage /> },
      { path: '/profile', element: <MyPage /> },
    ],
  },
  { path: '/trip/:calendarId', element: <TripPage /> },
  { path: '/trip/:id/detail', element: <TripDetailPage /> },
  { path: '/chats/:roomId', element: <ChatRoom /> },
];

export const router = createBrowserRouter(routes);
