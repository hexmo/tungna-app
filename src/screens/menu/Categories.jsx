import { StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Category from "../../components/Category";
import productCategories from "../../../data/categories";

const Categories = () => {
  const [categories] = useState(productCategories);

  return (
    <ScrollView>
      {categories.map((category) => (
        <Category
          name={category.name}
          image={category.image}
          key={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
