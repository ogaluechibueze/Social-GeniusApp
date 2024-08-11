import React from "react";
import css from "@/styles/authLayout.module.css";
import Image from "next/image";
export const metadata = {
  title: "Authentication",
};
const AuthLayout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <sdiv className={css.container}>
      <div className={css.right}>
          <Image
            src="/images/home2.jpg"
            alt="branding-image"
            quality={100}
            width={515}
            height={500}
          />
        </div>
        <div className={css.left}>{children}</div>
        
      </sdiv>
    </div>
  );
};

export default AuthLayout;
