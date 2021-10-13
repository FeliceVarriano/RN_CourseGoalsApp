import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.modal}>
          <Button title="ADD" onPress={addGoalHandler} />
          <Button title="CANCEL" color="red" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
