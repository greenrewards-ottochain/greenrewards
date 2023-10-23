import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div>
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
