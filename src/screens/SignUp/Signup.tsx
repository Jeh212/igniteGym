import backgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBackToSignScreen() {
    navigation.goBack();
  }

  return (
    <ScrollView
      background="gray.700"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack flex={1} bg="gray.700" px={10}>
        <Image
          source={backgroundImg}
          alt="people-training"
          defaultSource={backgroundImg}
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Password" secureTextEntry />
          <Button title="Criar e Acessar" />
        </Center>

        <Center mt={24}>
          <Button
            title="Volta para o login"
            variant="outline"
            onPress={handleGoBackToSignScreen}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
