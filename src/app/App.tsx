import { MainLayout } from "../shared/layouts/MainLayout";
import Footer from "../widgets/LayoutFooter/Footer";
import Header from "../widgets/LayoutHeader/Header";
import { usePosts } from "../entities/post/mocks/usePosts";
import { PostList } from "../widgets/PostList/PostList";
import "./App.css";
import { mockPosts } from "../entities/post/mocks/mockPosts";

export default function App() {
  const { posts, loading } = usePosts(mockPosts);
  return (
    <>
      <MainLayout header={<Header />} footer={<Footer />}>
        <PostList posts={posts} loading={loading} />
      </MainLayout>
    </>
  );
}
