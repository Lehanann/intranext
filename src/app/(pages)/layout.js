

import Sidebar from "@/components/elements/Sidebar";
import "../globals.css";
import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";


export const metadata = {
  title: "home",
  description: "Lehannet workspace",
};

export default function DefaultLayout({ children }) {
  return (
   
      <main
        className={`flex h-full p-0.5 gap-0.5`}
      >
        <Sidebar/>
        <div className="flex flex-col w-full">
          <Header/>
          {children}
          <Footer/>
        </div>
      </main>
  );
}