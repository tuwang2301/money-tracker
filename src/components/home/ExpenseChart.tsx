import React from "react";
import { View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  decimalPlaces: 0,
  fillShadowGradientFrom: "#00bfff",
  fillShadowGradientTo: "#00bfff",
  fillShadowGradientFromOpacity: 1,
  fillShadowGradientToOpacity: 0.25,
  barPercentage: 0.75,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const ExpenseChart = () => {
  const data = {
    labels: ["Food", "Transport", "Entertainment"],
    datasets: [
      {
        data: [300, 50, 100],
      },
    ],
  };
  return (
    <View>
      <BarChart
        data={data}
        width={400}
        height={300}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        yAxisSuffix="$"
      />
    </View>
  );
};

export default ExpenseChart;
