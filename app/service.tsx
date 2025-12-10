import React from "react";
import { View, Text, ScrollView } from "react-native";

const Service = () => {
  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Text className="text-3xl font-bold text-gray-800 mb-4">
        Our Services
      </Text>

      <Text className="text-gray-600 mb-6">
        We provide top-notch services to help your business grow. Our team is
        dedicated to delivering reliable solutions tailored to your needs.
      </Text>

      <View className="space-y-4">
        <View className="flex flex-row items-center bg-red-100 p-4 rounded-lg">
          <View className="w-10 h-10 bg-red-500 rounded-full mr-4"></View>
          <Text className="text-gray-800 font-semibold">Consulting</Text>
        </View>

        <View className="flex flex-row items-center bg-green-100 p-4 rounded-lg">
          <View className="w-10 h-10 bg-green-500 rounded-full mr-4"></View>
          <Text className="text-gray-800 font-semibold">Development</Text>
        </View>

        <View className="flex flex-row items-center bg-blue-100 p-4 rounded-lg">
          <View className="w-10 h-10 bg-blue-500 rounded-full mr-4"></View>
          <Text className="text-gray-800 font-semibold">Design</Text>
        </View>

        <View className="flex flex-row items-center bg-yellow-100 p-4 rounded-lg">
          <View className="w-10 h-10 bg-yellow-500 rounded-full mr-4"></View>
          <Text className="text-gray-800 font-semibold">Support</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Service;
