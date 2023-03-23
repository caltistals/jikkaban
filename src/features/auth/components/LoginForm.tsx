import {
  TextInput,
  Paper,
  Container,
  Title,
  PasswordInput,
  Button,
  Divider,
} from "@mantine/core";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const { form, handleLogin, navigateToRegister } = useLogin();

  return (
    <Container size={400} my={40}>
      <Title align="center" color="cyan.9">
        ログイン
      </Title>
      <Paper p="xl" mx="auto" my="lg" withBorder>
        <form onSubmit={handleLogin}>
          <TextInput
            size="md"
            withAsterisk
            label="メールアドレス"
            placeholder="xxx@example.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            size="md"
            withAsterisk
            label="パスワード"
            placeholder="●●●●●●"
            mt="md"
            {...form.getInputProps("password")}
          />
          <Button type="submit" size="md" color="cyan" mt="xl" fullWidth>
            ログイン
          </Button>
          <Divider my="sm" label="または" labelPosition="center" />
          <Button
            size="md"
            variant="subtle"
            color="cyan"
            fullWidth
            onClick={navigateToRegister}
          >
            新規登録
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
