import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => {
  return (
    <Layout>
        <div className="text-center">
      <h1>404</h1>
      <p>
        La pagina no existe. Por favor retorna a
        <Link href="/">
          <a> Home</a>
        </Link>
      </p>
      </div>
    </Layout>
  );
};

export default custom404;
