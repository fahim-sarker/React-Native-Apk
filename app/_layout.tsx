import "../global.css";
import { Stack } from "expo-router";
import { View } from "react-native";
import Navbar from "@/Components/Navbar";

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack screenOptions={{ headerShown: false }} />
      <Navbar />
    </View>
  );
};
