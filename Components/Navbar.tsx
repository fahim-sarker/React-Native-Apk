import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";                

const Navbar = () => {
  const router = useRouter();

  return (
    <View className="bg-black p-2 flex flex-row justify-around">
      <Pressable className="items-center" onPress={() => router.push("/")}>
        <Ionicons name="home-outline" size={26} color="white" />
        <Text className="text-white text-xs">Home</Text>     
      </Pressable>

      <Pressable className="items-center" onPress={() => router.push("/about")}>
        <Ionicons name="information-circle-outline" size={26} color="white" />
        <Text className="text-white text-xs">About</Text>
      </Pressable>

      <Pressable
        className="items-center"
        onPress={() => router.push("/service")}
      >
        <Ionicons name="construct-outline" size={26} color="white" />
        <Text className="text-white text-xs">Services</Text>
      </Pressable>

      <Pressable
        className="items-center"
        onPress={() => router.push("/contact")}
      >
        <Ionicons name="call-outline" size={26} color="white" />
        <Text className="text-white text-xs">Contact</Text>
      </Pressable>
    </View>
  );
};

export default Navbar;
