import Footer from "@/components/shares/Footer";
import NavBar from "@/components/shares/NavBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-10 px-4">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
