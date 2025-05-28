import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-amber-100 flex flex-col">
      <Header />
      <main className="flex-grow px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
