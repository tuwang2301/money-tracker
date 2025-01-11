import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import CustomIconButton from "../CustomIconButton";
import CustomModal from "../CustomModal";
import COLORS from "@/src/constants/color";
import CustomButton from "../CustomButton";

const AddTransactionModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { t } = useTranslation();

  return (
    <View>
      <CustomIconButton
        iconName="add"
        onPress={() => {
          setShowModal(true);
        }}
        backgroundColor={COLORS.secondaryButton}
        buttonSize={48}
        iconSize={28}
      />
      <CustomModal
        onClose={() => {
          setShowModal(false);
        }}
        visible={showModal}
        title={t("Add Transaction")}
        footer={
          <View
            style={{
              flexDirection: "row",
              gap: 8,
            }}
          >
            <View style={{ flex: 1 }}>
              <CustomButton
                title={t("Add Transaction")}
                onPress={() => {
                  setShowModal(false);
                }}
              />
            </View>
          </View>
        }
      >
        <View></View>
      </CustomModal>
    </View>
  );
};

export default AddTransactionModal;
