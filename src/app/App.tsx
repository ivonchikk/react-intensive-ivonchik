import { MainLayout } from "../shared/layouts/MainLayout";
import Footer from "../widgets/LayoutFooter/Footer";
import Header from "../widgets/LayoutHeader/Header";
import {PostList} from "../widgets/PostList/PostList";

export default function App() {
  return (
    <div>
      <MainLayout header={<Header />} footer={<Footer />}>
        <PostList />
      </MainLayout>
    </div>
  );
}
