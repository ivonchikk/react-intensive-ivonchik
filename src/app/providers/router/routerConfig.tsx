import { Navigate, type RouteObject } from "react-router-dom";
import { PostsPage } from "../../../pages/PostsPage/ui/PostsPage";
import { PostDetailsPage } from "../../../pages/PostDetailsPage/PostDetailsPage";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import Header from "../../../widgets/LayoutHeader/Header";
import Footer from "../../../widgets/LayoutFooter/Footer";
import { UserPage } from "../../../pages/UserPage/UserPage";
import { UserAlbumsPage } from "../../../pages/UserAlbumsPage/UserAlbumsPage";
import { UserTodosPage } from "../../../pages/UserTodosPage/UserTodosPage";
import { UserPostsPage } from "../../../pages/UserPostsPage/UserPostsPage";
import { AlbumPhotosPage } from "../../../pages/AlbumPhotosPage/AlbumPhotosPage";
export const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout header={<Header />} footer={<Footer />} />,
    children: [
      {
        index: true,
        element: <Navigate to="/posts" replace />,
      },

      {
        path: "posts",
        element: <PostsPage />,
      },

      {
        path: "posts/:id",
        element: <PostDetailsPage />,
      },

      {
        path: "user/:id",
        element: <UserPage />,
        children: [
          {
            path: "albums",
            element: <UserAlbumsPage />,
          },
          {
            path: "todos",
            element: <UserTodosPage />,
          },
          {
            path: "posts",
            element: <UserPostsPage />,
          },
        ],
      },

      {
        path: "albums/:id/photos",
        element: <AlbumPhotosPage />,
      },
    ],
  },
];
