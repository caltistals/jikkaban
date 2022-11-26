import {
  AppShell,
  Burger,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconCalendarEvent, IconTruckDelivery } from "@tabler/icons";
import { FC, PropsWithChildren, useState } from "react";
import { NavbarLinks } from "./NavbarLinks";

export const Layout: FC<PropsWithChildren> = (props) => {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          p="xs"
        >
          <Navbar.Section grow mt="sm">
            <NavbarLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>
            <Text>Application header</Text>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
};
