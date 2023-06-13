import { MaterialIcons } from "@expo/vector-icons";
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { Avatar } from "./Avatar";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <Avatar
        size={16}
        borderSize={2}
        source={{
          uri: "https://github.com/jeh212.png",
        }}
        alt="user image"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Jean
        </Heading>
      </VStack>
      <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
    </HStack>
  );
}
