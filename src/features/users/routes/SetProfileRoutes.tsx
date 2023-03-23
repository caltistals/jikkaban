import { Route, Routes } from "react-router-dom";
import { Head } from "../../../components/Head";
import UserSettings from "../components/UserSettings";

export const SetProfileRoutes = () => {
  return (
    <Routes>
      <Route
        path="settings"
        element={
          <>
            <Head title="プロフィール設定" />
            <UserSettings />
          </>
        }
      />
    </Routes>
  );
};
