import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../Data/dummy-data";
import React, { useLayoutEffect } from "react";
import MealsDetail from "../Components/MealsDetail";
import IconButton from "../Components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const seletedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPresshandler() {
    console.log("Yes pressed!!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton color="white" icon="star" onPress={headerButtonPresshandler} />
      },
    });
  }, [navigation, headerButtonPresshandler]);

  return (
    <View style={{ flex: 1 }}>
      <Image style={styles.image} source={{ uri: seletedMeal.imageUrl }} />
      <ScrollView>
        <Text style={styles.title}>{seletedMeal.title}</Text>
        <MealsDetail
          duration={seletedMeal.duration}
          complexity={seletedMeal.complexity}
          affordability={seletedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.subtitileContainer}>
          <Text style={styles.subtitile}>Ingredients</Text>
        </View>
        <View style={styles.listItem}>
          {seletedMeal.ingredients.map((ingredient) => (
            <Text style={styles.itemText} key={ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>

        <View style={styles.subtitileContainer}>
          <Text style={styles.itemText}>Steps</Text>
        </View>
        <View style={styles.listItem}>
          {seletedMeal.steps.map((step) => (
            <Text style={styles.itemText} key={step}>
              {step}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  subtitile: {
    color: "#e4a576",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitileContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomColor: "#e4a576",
    borderBottomWidth: 2,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e4a576",
  },
  itemText: {
    color: "#8c421d",
    textAlign: "center",
  },
});
