import React, { useState } from "react";
import Header from "../components/Header";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Fruit from "./Fruit";

function ViewCards({ navigation }) {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    card.id = cards.length + 1;
    setCards([...cards, card]);
  };
  return (
    <>
      <Header titleText="Fruits" navigation={navigation}/>
      <View style={styles.container}>
        {cards.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>no fruit</Text>
          </View>
        ) : (
          <FlatList
            data={cards}
            renderItem={({ item }) => (
                <Fruit title= {item.cardTitle} description={item.cardValue}/>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add new fruit card"
          // add a second parameter object
          onPress={() =>
            navigation.navigate("AddCards", {
              addCard,
            })
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#000",
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
});

export default ViewCards;
