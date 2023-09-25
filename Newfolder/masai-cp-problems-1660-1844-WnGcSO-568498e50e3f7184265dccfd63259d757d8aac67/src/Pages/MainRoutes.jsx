import { Route, Routes } from "react-router-dom";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Add all routes here */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
