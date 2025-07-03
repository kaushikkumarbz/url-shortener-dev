import { Container, Center, Loader, Text, Group } from "@mantine/core";

export default function LoadingScreen({
  message = "Loading...",
  minHeight = 300,
}) {
  return (
    <Container size="lg" mt="xl">
      <Center h={minHeight}>
        <Group>
          <Loader size="xl" />
          <Text>{message}</Text>
        </Group>
      </Center>
    </Container>
  );
}
