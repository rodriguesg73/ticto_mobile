import { Center, Spinner } from "native-base";

export const Loading = () => {
  return (
    <Center flex={1} bg="cinza.200">
      <Spinner color="purple.500"/>
    </Center>
  )
}