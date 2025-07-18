import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import Detail from "./pages/detail";
import Search from "./pages/search";
import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />

        <div className="flex w-full">
          <Sidebar />

          <main className="flex-1 w-full overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/watch" element={<Detail />} />
              <Route path="/results" element={<Search />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
