import { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import FirebaseApp from "./FirebaseApp";
import { NotificationsProvider } from "@mantine/notifications";
import { HelmetProvider } from "react-helmet-async";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HelmetProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <FirebaseApp>
            <Router>{children}</Router>
          </FirebaseApp>
        </NotificationsProvider>
      </MantineProvider>
    </HelmetProvider>
  );
};
