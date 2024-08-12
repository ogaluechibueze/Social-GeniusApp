import React, { Suspense } from "react";
import css from "@/styles/Home.module.css";
import PostGenerator from "@/components/Post/PostGenerator";
import Posts from "@/components/Post/Posts";
import PopularTrends from "@/components/PopularTrends";
import FriendsSuggestion from "@/components/FriendsSuggestion";
import { Space, Spin, Typography } from "antd";
import Box from "@/components/Box/Box";
const HomeView = () => {
  return (
    <div className={css.wrapper}>
       <div className={css.rightSide}>
        <Box>
        <Suspense
          fallback={
            <Space direction="vertical">
              <Spin />
              <Typography className="typoH4">Loading trends...</Typography>
            </Space>
          }
        >
          <PopularTrends />
        </Suspense>

        <FriendsSuggestion />
        </Box>
      </div>
      
      <div className={css.postsArea}>
        {/* post generator on top */}
        <PostGenerator />

        {/* posts */}
        <Posts />
      </div>

     
    </div>
  );
};

export default HomeView;
