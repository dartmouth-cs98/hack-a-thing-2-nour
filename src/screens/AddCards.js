import Header from "../components/Header";
import { Text } from "react-native-paper";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, TextInput, FAB , Chip} from "react-native-paper";

function AddCards({ navigation }) {
  const [cardTitle, setCardTitle] = useState("");
  const [cardValue, setCardValue] = useState("");

  function onSaveCard() {
    navigation.state.params.addCard({ cardTitle, cardValue });
    navigation.goBack();
  }
  return (
    <>
      <Header titleText="Add a new fruit card" />
      <IconButton
        icon="close"
        size={20}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <Text style={styles.textTitle}>Title</Text>
        <TextInput
          label="Add Title Here"
          value={cardTitle}
          mode="outlined"
          onChangeText={setCardTitle}
          style={styles.title}
        />
        <Text style={styles.textTitle}>Card content:</Text>
        <TextInput
          label="Add Card Here"
          value={cardValue}
          onChangeText={setCardValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={cardTitle == "" ? true : false}
          onPress={() => onSaveCard()}
        />
      </View>
    </>
  );
}

//         <Chip icon="information" onPress={() => console.log('Pressed')} style={styles.chip}>Chip</Chip>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  iconButton: {
    backgroundColor: "rgba(46, 113, 102, 0.8)",
    position: "absolute",
    right: 0,
    top: 30,
    margin: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    backgroundColor: "rgba(46, 113, 102, 0.8)",
  },
  text: {
    height: 300,
    fontSize: 16,
    color: "#000",
    backgroundColor: "rgba(46, 113, 102, 0.8)",
  },
  textTitle: {
    height: 20,
    fontSize: 16,
    color: "#000",
    marginVertical: 5,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
  chip: {
    backgroundColor:"#F4F",
  }
});

export default AddCards;
