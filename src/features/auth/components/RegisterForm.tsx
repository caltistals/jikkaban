import {
  TextInput,
  Paper,
  Container,
  Title,
  PasswordInput,
  Button,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../../contexts";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value)
          ? null
          : "正しいメールアドレスを入力してください",
      password: (value) =>
        value.length < 6 ? "6文字以上のパスワードを入力してください" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "パスワードが一致していません" : null,
    },
  });

  return (
    <Container size={400} my={40}>
      <Title align="center" color="cyan.9">
        新規登録
      </Title>
      <Paper p="xl" mx="auto" my="lg" withBorder>
        <form
          onSubmit={form.onSubmit(async (values) => {
            await createUserWithEmailAndPassword(
              auth as Auth,
              values.email,
              values.password
            );
            navigate("/app");
          })}
        >
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
          <PasswordInput
            size="md"
            withAsterisk
            label="パスワードの確認"
            placeholder="●●●●●●"
            mt="md"
            {...form.getInputProps("confirmPassword")}
          />
          <Button size="md" type="submit" color="cyan.6" mt="xl" fullWidth>
            新規登録
          </Button>
          <Divider my="sm" label="または" labelPosition="center" />
          <Button
            size="md"
            variant="subtle"
            color="cyan"
            fullWidth
            onClick={() => navigate("/auth/login")}
          >
            ログイン
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
