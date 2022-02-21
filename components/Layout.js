import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, footer = true, dark = false, title }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done(true));

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className="bg-info">
      <Head>
        <title>My portfolio</title>
      </Head>
      <Navbar />
      <main className="container py-4">

      {
        title && (
          <h1 className="text-center text-light">{title}</h1>
        )
      }

        {children}
      </main>
      {footer && (
        <footer className="bg-info text-light text-center">
          <div className="container p-1">
            <h3>&copy; Jonatan Ochoa Portfolio</h3>
            <h4>{new Date().getFullYear()}</h4>
            <p>All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
