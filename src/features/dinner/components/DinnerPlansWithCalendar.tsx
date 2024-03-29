import {
  Accordion,
  ActionIcon,
  Button,
  Card,
  Center,
  Container,
  Group,
  Loader,
  Text,
  Title,
} from "@mantine/core";
import { DinnerPlan } from "./DinnerPlan";
import "dayjs/locale/ja";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { IconAlertCircle, IconCalendarEvent, IconPlus } from "@tabler/icons";
import { CreateDinnerPlanModal } from "./CreateDinnerPlanModal";
import useReadDinnerPlans from "../hooks/useReadDinnerPlans";
import LoadingSkeleton from "../../../components/LoadingSkeleton";

export const DinnerPlansWithCalendar = () => {
  const {
    dinnerPlans,
    isLoading,
    opened,
    setOpened,
    date,
    setDate,
    handleReadDinnerPlan,
  } = useReadDinnerPlans();

  return (
    <>
      <Container fluid>
        <Card withBorder shadow="sm" radius="sm" mb="xl">
          <Card.Section withBorder inheritPadding py="xs" mb="xs">
            <Group spacing="xs">
              <IconCalendarEvent size={25} />
              <Title order={3} color="dark.3" weight={700}>
                晩御飯の予定
              </Title>
            </Group>
            <Text color="dark.2">{dayjs(date).format("YYYY年MM月DD日")}</Text>
          </Card.Section>
          <Center mb="xl">
            <Calendar
              firstDayOfWeek="sunday"
              value={date}
              onChange={setDate}
              locale="ja"
            />
          </Center>
          <>
            {isLoading && <LoadingSkeleton quantity={2} />}
            {!isLoading && dinnerPlans ? (
              <Accordion
                styles={{
                  item: {
                    // styles added to all items
                    backgroundColor: "#fff",

                    // // styles added to expanded item
                    // "&[data-active]": {
                    //   backgroundColor: "#ffd803",
                    // },
                  },
                }}
                chevronPosition="right"
              >
                {dinnerPlans.map((dinnerPlan) => (
                  <DinnerPlan
                    dinnerPlan={dinnerPlan}
                    key={dinnerPlan.user.id}
                  />
                ))}
              </Accordion>
            ) : (
              <>
                {!isLoading && (
                  <Group>
                    <ActionIcon variant="transparent">
                      <IconAlertCircle size={20} />
                    </ActionIcon>
                    <Text color="dark.2">予定が登録されていません</Text>
                  </Group>
                )}
              </>
            )}
          </>
          <CreateDinnerPlanModal
            opened={opened}
            setOpened={setOpened}
            date={dayjs(date).format("YYYY-MM-DD")}
            fetchData={handleReadDinnerPlan}
          />
          {/* <ActionIcon
            style={{
              position: "fixed",
              width: "60px",
              height: "60px",
              bottom: "40px",
              right: "40px",
            }}
            radius="xl"
            variant="filled"
            onClick={() => setOpened(true)}
            color="cyan"
          >
            <IconPlus size={30} />
          </ActionIcon> */}
          <Button
            color="cyan"
            onClick={() => setOpened(true)}
            leftIcon={<IconPlus />}
            style={{
              position: "fixed",
              bottom: "15px",
              right: "32px",
            }}
          >
            予定を追加
          </Button>
        </Card>
      </Container>
    </>
  );
};
