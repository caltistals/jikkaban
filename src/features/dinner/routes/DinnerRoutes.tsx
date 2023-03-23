import { Route, Routes } from "react-router-dom";
import { Head } from "../../../components/Head";
import { DinnerPlansWithCalendar } from "../components/DinnerPlansWithCalendar";

export const DinnerRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <Head title="晩御飯の予定" />
            <DinnerPlansWithCalendar />
          </>
        }
      />
    </Routes>
  );
};
