import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      {/* <Route element={<NewPage />} path="/pathToPage" /> */}
    </Routes>
  );
}

export default App;
