import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CheckIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "../theme";

export interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = (props): React.JSX.Element => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.appContainer}>
      <View style={styles.checkboxContainer}>
        <Pressable
          className={
            "justify-center items-center border border-gray-500 rounded-sm bg-transparent " +
            (checked ? "bg-blue-500" : "")
          }
          //style={[checked && styles.checkboxChecked]}
          style={{ width: hp(3), height: hp(3) }}
          onPress={() => setChecked(!checked)}
        >
          {checked && <CheckIcon size={24} strokeWidth={2} color={Colors.white} />}
        </Pressable>
      </View>
      <View>
        <Text className="text-blue-500 font-semibold" style={{ fontSize: hp(2), paddingLeft: wp(2) }}>
          {props.label}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxChecked: {
    backgroundColor: "coral",
  },
  appContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 18,
  },
});

export default Checkbox;
