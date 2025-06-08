import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogPage from "./pages/LogPage";
import ReviewPage from "./pages/ReviewPage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogPage />} />
      <Route path="/review" element={<ReviewPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
