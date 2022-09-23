import React, { Suspense } from "react";
import { Layout, PostList } from "../components";

const Index = () => {
  return (
    <Layout>
      <Suspense fallback={null}>
        <PostList />
      </Suspense>
    </Layout>
  );
};

export default Index;
