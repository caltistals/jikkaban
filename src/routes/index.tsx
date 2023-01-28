import { useRoutes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";
import { profileUndefinedRoutes } from "./profileUndefined";
import { groupUndefinedRoutes } from "./groupUndefined";
import { userUndefinedRoutes } from "./userUndefined";

export const AppRoutes = () => {
  const { user } = useContext(UserContext);
  let routes = publicRoutes;
  if (user === undefined) routes = userUndefinedRoutes;
  if (user) {
    if (!user?.displayName) {
      routes = profileUndefinedRoutes;
    } else if (!user?.groupId) {
      routes = groupUndefinedRoutes;
    } else {
      routes = privateRoutes;
    }
  }

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
