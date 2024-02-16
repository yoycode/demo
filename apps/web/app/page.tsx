import React from "react";
import { Button, UIProvider } from "@thepsy/ui";

const Page = () => {
  return (
    <main>
      <UIProvider>
        <Button>클라이언트 컴포넌틐</Button>
        <Button>서버 컴포넌트</Button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </UIProvider>
    </main>
  );
};

export default Page;
