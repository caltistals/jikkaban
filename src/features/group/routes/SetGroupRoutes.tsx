import { Route, Routes } from "react-router-dom";
import { Head } from "../../../components/Head";
import CreateGroup from "../components/CreateGroup";
import JoinGroup from "../components/JoinGroup";

export const SetGroupRoutes = () => {
  return (
    <Routes>
      <Route
        path="join"
        element={
          <>
            <Head title="グループに参加" />
            <JoinGroup />
          </>
        }
      />
      <Route
        path="create"
        element={
          <>
            <Head title="グループを作成" />
            <CreateGroup />
          </>
        }
      />
    </Routes>
  );
};
