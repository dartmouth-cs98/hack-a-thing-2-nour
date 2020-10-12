import React, { useState } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

function Fruit({ description, title }) {
  const [pressed, setPressed] = useState(false);
  console.log(pressed);
  return (
    <Card
      onPress={() => {
        setPressed(!pressed);
      }}
      style={styles.card}
    >
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Title>{title}</Title>
        {pressed ? <Paragraph>{description}</Paragraph> : null}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  cover: {
    resizeMode: "cover",
  },
  card: {
    paddingBottom: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#60DBC5',
  },
});

export default Fruit;
