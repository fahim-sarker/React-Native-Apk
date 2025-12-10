import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    // For now, just show an alert. You can integrate API submission here.
    Alert.alert("Success", "Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ScrollView className="flex-1 bg-white p-5">
      {/* Header */}
      <Text className="text-3xl font-bold text-gray-800 mb-4">Contact Us</Text>

      {/* Description */}
      <Text className="text-gray-600 mb-6">
        Have questions or need support? Fill out the form below and we will get
        back to you as soon as possible.
      </Text>

      {/* Form */}
      <View className="space-y-4">
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg p-3"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Your Email"
          keyboardType="email-address"
          className="border border-gray-300 rounded-lg p-3"
        />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Your Message"
          multiline
          numberOfLines={4}
          className="border border-gray-300 rounded-lg p-3 text-gray-800"
        />

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-blue-500 p-4 rounded-lg items-center"
        >
          <Text className="text-white font-semibold">Send Message</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Info */}
      <View className="mt-8 space-y-4">
        <Text className="text-gray-800 font-semibold">
          Email: support@example.com
        </Text>
        <Text className="text-gray-800 font-semibold">
          Phone: +1 (234) 567-890
        </Text>
        <Text className="text-gray-800 font-semibold">
          Address: 123 Main Street, City, Country
        </Text>
      </View>
    </ScrollView>
  );
};

export default Contact;
