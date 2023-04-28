import { ReactElement } from "react";
import { HomePage } from "../components/home";
import { Layout } from "../components/layout";

const NextHomePage = () => <HomePage />;

NextHomePage.getLayout = (page: ReactElement) => (
  <Layout title="Home">{page}</Layout>
);

export default NextHomePage;
