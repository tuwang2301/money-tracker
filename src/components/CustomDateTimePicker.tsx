import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import CustomTextInput from "./CustomTextInput";
import COLORS from "../constants/color";

type Props = {
  value: Date;
  setValue: (date: Date) => void;
  mode?: "date" | "time" | "datetime" | "countdown";
};

const CustomDateTimePicker = ({ value, setValue, mode = "date" }: Props) => {
  const [open, setOpen] = React.useState(false);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setOpen(false);
      setValue(currentDate);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={{
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.border
      }} onPress={() => setOpen(true)}>
        <Text>{value.toLocaleDateString()}</Text>
      </Pressable>
      {open && (
        <RNDateTimePicker
          value={value}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default CustomDateTimePicker;
