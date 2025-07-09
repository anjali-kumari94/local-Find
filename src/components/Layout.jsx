import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageContainer from "./PageContainer";

const Layout = ({ children, ...props }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header {...props} />
    <PageContainer>{children}</PageContainer>
    <Footer />
  </div>
);

export default Layout;
