import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import CustomIconButton from "../CustomIconButton";
import COLORS from "@/src/constants/color";
import CustomModal from "../CustomModal";
import { useTranslation } from "react-i18next";
import CustomButton from "../CustomButton";
import DatePicker from "react-native-date-picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const categories = [
  {
    id: 1,
    name: "Food",
  },
  {
    id: 2,
    name: "Travel",
  },
  {
    id: 3,
    name: "Entertainment",
  },
  {
    id: 4,
    name: "Shopping",
  },
  {
    id: 5,
    name: "Health & Fitness",
  },
  {
    id: 6,
    name: "Education",
  },
  {
    id: 7,
    name: "Bills & Utilities",
  },
  {
    id: 8,
    name: "Salary",
  },
  {
    id: 9,
    name: "Investment",
  },
  {
    id: 10,
    name: "Gifts & Donations",
  },
  {
    id: 11,
    name: "Rent",
  },
  {
    id: 12,
    name: "Insurance",
  },
  {
    id: 13,
    name: "Personal Care",
  },
  {
    id: 14,
    name: "Savings",
  },
];

const transactionType = ["Income", "Expense"];

const FilterGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderColor: COLORS.border,
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
        {title}:
      </Text>
      <View
        style={{
          marginHorizontal: 12,
        }}
      >
        {children}
      </View>
    </View>
  );
};

const FilterModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState<number[]>(
    []
  );
  const [selectedType, setSelectedType] = React.useState<string>("");
  const [dateRange, setDateRange] = React.useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const { t } = useTranslation();

  const selectCategory = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  return (
    <View>
      <CustomIconButton
        iconName="filter"
        onPress={() => {
          setShowModal(true);
        }}
        backgroundColor={COLORS.primaryButton}
      />
      <CustomModal
        onClose={() => {
          setShowModal(false);
        }}
        visible={showModal}
        title={t("Filter")}
        footer={
          <View
            style={{
              flexDirection: "row",
              gap: 8,
            }}
          >
            <View style={{ flex: 1 }}>
              <CustomButton
                title={t("Apply")}
                onPress={() => {
                  setShowModal(false);
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <CustomButton
                title={t("Reset")}
                onPress={() => {
                  setShowModal(false);
                }}
                bgColor={COLORS.secondaryButton}
              />
            </View>
          </View>
        }
      >
        <ScrollView>
          <FilterGroup title={t("Transaction Type")}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              {transactionType.map((t, index) => {
                const isSelected = selectedType === t;
                return (
                  <Pressable
                    style={{
                      flexBasis: "40%",
                      flex: 1,
                      padding: 8,
                      borderRadius: 5,
                      backgroundColor: isSelected
                        ? COLORS.secondaryButton
                        : "transparent",
                      minWidth: 80, // Đảm bảo đủ độ rộng cho text
                    }}
                    key={index}
                    onPress={() => {
                      setSelectedType(t);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: isSelected ? "white" : "black",
                        includeFontPadding: false, // Loại bỏ padding mặc định của font
                      }}
                      numberOfLines={1} // Giới hạn 1 dòng duy nhất
                      ellipsizeMode="tail" // Cắt bớt nếu quá dài
                    >
                      {t}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </FilterGroup>
          <FilterGroup title={t("Category")}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              {categories.map((c) => {
                const isSelected = selectedCategories.includes(c.id);
                return (
                  <Pressable
                    style={{
                      flexBasis: "40%",
                      flex: 1,
                      padding: 8,
                      borderRadius: 5,
                      backgroundColor: isSelected
                        ? COLORS.secondaryButton
                        : "transparent",
                      minWidth: 80, // Đảm bảo đủ độ rộng cho text
                    }}
                    key={c.id}
                    onPress={() => {
                      selectCategory(c.id);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: isSelected ? "white" : "black",
                        includeFontPadding: false, // Loại bỏ padding mặc định của font
                      }}
                      numberOfLines={1} // Giới hạn 1 dòng duy nhất
                      ellipsizeMode="tail" // Cắt bớt nếu quá dài
                    >
                      {c.name}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </FilterGroup>
          <FilterGroup title={t("Time Range")}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <RNDateTimePicker
                mode="date"
                value={dateRange[0]}
                onChange={(d) => {
                  console.log(d);
                }}
              />
            </View>
          </FilterGroup>
        </ScrollView>
      </CustomModal>
    </View>
  );
};

export default FilterModal;
