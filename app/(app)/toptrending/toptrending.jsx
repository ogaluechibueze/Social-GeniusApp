import React, { Suspense } from "react";
import css from "@/styles/Home.module.css";
import PopularTrends from "@/components/PopularTrends";
import FriendsSuggestion from "@/components/FriendsSuggestion";
import { Space, Spin, Typography } from "antd";


const toptrending = () => {
  return (
    <div className={css.wrapper}>
     

      <div className={css.rightSide}>
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
      </div>
    </div>
  );
};

export default toptrending;

