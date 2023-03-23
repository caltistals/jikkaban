import { Navigate, Route, Routes } from "react-router-dom";
import { Head } from "../../../components/Head";
import GroupInformation from "../components/GroupInformation";

export const GroupInformationRoutes = () => {
  return (
    <Routes>
      <Route
        path="information"
        element={
          <>
            <Head title="グループ情報" />
            <GroupInformation />
          </>
        }
      />
      <Route path="*" element={<Navigate to="/app/group/information" />} />
    </Routes>
  );
};
