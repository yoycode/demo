import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="ko">
        <head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
};

export default Layout;
