import React from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
  <TouchableOpacity
    onPress={onHandleSearchType}
    style={styles.btn(name, activeTab)}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: SIZES.small / 2 }}
          />
        )}
        horizontal
      />
    </SafeAreaView>
  );
};

export default Tabs;
