import { Route, Routes } from "react-router-dom";
import { Head } from "../../../components/Head";
import UserProfile from "../components/UserProfile";

export const UserProfileRoutes = () => (
  <Routes>
    <Route
      path=""
      element={
        <>
          <Head title="ユーザー情報" />
          <UserProfile />
        </>
      }
    />
  </Routes>
);
