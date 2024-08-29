import React, { useEffect } from "react";
import { View, Text } from "react-native";

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Login");
    }, 1000); // Chuyển trang sau 10s

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Xin chào, tôi là Ngô Nguyên Bảo, Mã số Sinh viên 2110170</Text>
      <Text>Ứng dụng sẽ tự động chuyển sang Đăng nhập sau 10 giây.</Text>
    </View>
  );
};

export default IntroScreen;
