import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const About = () => {
  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Image
        source={require("../assets/images/home.png")}
        className="w-full h-48 rounded-lg mb-4 mx-auto"
        resizeMode="cover"
      />

      <Text className="text-gray-600 mb-6">
        Welcome to our app! We aim to provide the best experience for our users
        with top-notch features, easy navigation, and seamless design. Learn
        more about what we offer below.
      </Text>

      <View className="space-y-4">
        <View className="flex flex-row items-center bg-red-100 p-4 rounded-lg">
          <View className="w-10 h-10 bg-red-500 rounded-full mr-4"></View>
          <Text className="text-gray-800 font-semibold">Fast & Reliable</Text>
        </View>

        <View className="flex flex-row items-center bg-green-100 p-4 rounded-lg">
          <View className="w-10 h-10 bg-green-500 rounded-full mr-4"></View>
          <Text className="text-gray-800 font-semibold">User Friendly</Text>
        </View>

        <View className="flex flex-row items-center bg-blue-100 p-4 rounded-lg">
          <View className="w-10 h-10 bg-blue-500 rounded-full mr-4"></View>
          <Text className="text-gray-800 font-semibold">24/7 Support</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
