import * as React from "react";
import Link from "next/link";
import Head from "next/head";

const linkStyle = {
  marginRight: 15,
};

export const Header = () => (
  <div>

    <Head>
      <title>NextJS + TypeScript Boilerplate</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>

    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>

  </div>
);
