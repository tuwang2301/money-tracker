import React from "react";
import { Pressable, View } from "react-native";
import CustomTextInput from "../CustomTextInput";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "@/src/constants/color";
import FilterModal from "./FilterModal";
import CustomIconButton from "../CustomIconButton";

const TransactionFilterBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
      }}
    >
      <View style={{ flex: 9 }}>
        <CustomTextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search"
          suffix={<CustomIconButton iconName="search" onPress={() => {}} />}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FilterModal />
      </View>
    </View>
  );
};

export default TransactionFilterBar;
