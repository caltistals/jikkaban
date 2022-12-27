import {
  Avatar,
  Container,
  Title,
  Stack,
  Text,
  Group,
  Card,
  Center,
  Loader,
  Divider,
  CopyButton,
  ActionIcon,
} from "@mantine/core";
import { FirebaseContext, UserContext } from "../../../contexts";
import { useContext, useState, useEffect } from "react";

import { findGroup } from "../api/find-group";
import { GroupType } from "../types";
import { showNotification } from "@mantine/notifications";
import { IconClipboard, IconClipboardCheck } from "@tabler/icons";

const GroupInformation = () => {
  const { user } = useContext(UserContext);
  const { db } = useContext(FirebaseContext);
  const [groupData, setGroupData] = useState<GroupType | null>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (db && user && user.groupId) {
        try {
          const newGroupData = await findGroup(db, user.groupId);
          setGroupData(newGroupData);
        } catch (error) {
          showNotification({
            message: "グループ情報の取得に失敗しました",
            color: "red",
          });
        }
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container size={400} my={40}>
      <Title order={2} align="center" color="cyan.5" mb="lg">
        グループ情報
      </Title>
      <Stack>
        {isLoading && (
          <Center>
            <Loader />
          </Center>
        )}
        {groupData ? (
          <>
            <Card>
              <Text size="xs" color="gray">
                グループ名
              </Text>
              <Text size="xl">{groupData.groupName}</Text>
              <Divider my="md" label="所属ユーザー" color="gray" />
              <Stack>
                {groupData.users.map((user) => {
                  if (user.displayName && user.displayName) {
                    return (
                      <Group>
                        <Avatar
                          color={user.avatarColor}
                          radius="xl"
                          variant="filled"
                        />
                        <Text size="lg">{user.displayName}</Text>
                      </Group>
                    );
                  } else return null;
                })}
              </Stack>
              <Divider my="md" label="グループID" color="gray" />
              <Group>
                <Text size="lg">{groupData.groupId}</Text>
                <CopyButton value={groupData.groupId}>
                  {({ copied, copy }) => (
                    <ActionIcon
                      size={26}
                      onClick={copy}
                      color={copied ? "lime" : "cyan"}
                    >
                      {copied ? <IconClipboardCheck /> : <IconClipboard />}
                    </ActionIcon>
                  )}
                </CopyButton>
              </Group>
            </Card>
          </>
        ) : null}
      </Stack>
    </Container>
  );
};

export default GroupInformation;
