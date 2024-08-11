import React from "react";
import css from "@/styles/Header.module.css";
import { Flex } from "antd";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import ModeButton from "./ModeButton";
import SidebarButton from "./SidebarButton";
import Box from "./Box/Box";
const Header = () => {
  return (
    <header className={css.wrapper}>
      <Box style={{ height: "100%" }}>
        <div className={css.container}>
          {/* sidebar button */}
          <div className={css.sidebarButton}>
            <SidebarButton />
          </div>
          
          {/* logo */}
          <Image
            src="/images/genius.png"
            width={70}
            height={70}
            alt="logo"
            className={css.logo}
          />
         <div className={css.h1}>
         <h1>Social-Genius</h1>
         </div>
          {/* actions */}
          <Flex gap={25} align="center"> 
            <ModeButton />
            <UserButton afterSignOutUrl="/sign-in" />
          </Flex>
        </div>
      </Box>
    </header>
  );
};

export default Header;
