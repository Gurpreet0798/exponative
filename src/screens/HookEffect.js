import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const HookEffect = () => {
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View>
      <Text>Hiii</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HookEffect;
