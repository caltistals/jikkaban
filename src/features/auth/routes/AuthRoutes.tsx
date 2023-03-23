import { Navigate, Route, Routes } from "react-router-dom";
import { Head } from "../../../components/Head";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="register"
        element={
          <>
            <Head title="新規登録" />
            <RegisterForm />
          </>
        }
      />
      <Route
        path="login"
        element={
          <>
            <Head title="ログイン" />
            <LoginForm />
          </>
        }
      />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
