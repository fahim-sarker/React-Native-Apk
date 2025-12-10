import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View className="p-5 flex flex-col gap-10 items-center">
        <Image
          source={require("../assets/images/home.png")}
          className="w-full h-48"
          resizeMode="contain"
        />

        <Text className="text-4xl font-semibold text-center">
          Trusted by millions of people, part of one part
        </Text>

        <Pressable
          className="bg-blue-700 px-10 py-3 rounded-full w-full"
          onPress={() => console.log("Next pressed")}
        >
          <Text className="text-white text-lg text-center">Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
