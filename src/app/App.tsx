import { MainLayout } from "../shared/layouts/MainLayout";
import Footer from "../widgets/LayoutFooter/Footer";
import Header from "../widgets/LayoutHeader/Header";
import PostList from "../widgets/PostList/PostList";
import "./App.css";

export default function App() {
  return (
    <>
      <MainLayout header={<Header />} footer={<Footer />}>
        <PostList />
      </MainLayout>
    </>
  );
}
