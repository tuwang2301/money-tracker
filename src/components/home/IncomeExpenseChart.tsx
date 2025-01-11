import COLORS from "@/src/constants/color";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
const chartConfig: AbstractChartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const IncomeExpenseChart = () => {
  const { t } = useTranslation();
  const data = [
    {
      name: t("Income"),
      population: 2000000,
      color: COLORS.primaryButton,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: t("Expense"),
      population: 200000,
      color: COLORS.secondaryButton,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 10,
          color: COLORS.text,
        }}
      >
        {t("Income & Expense Chart")}
      </Text>
      <PieChart
        data={data}
        width={400}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"5"}
        absolute
      />
    </View>
  );
};

export default IncomeExpenseChart;
