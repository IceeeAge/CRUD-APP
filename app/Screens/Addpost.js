import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import GlobalApi from "../../API/GlobalApi";

export default function Addpost() {
  const [text, setText] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const createNewNote = () => {
    setLoading(true);
    const data = {
      text: text,
    };

    GlobalApi.CreateNote(data)
      .then((resp) => {
        console.log(resp);
        ToastAndroid.show("Added Successfully", ToastAndroid.LONG);
        setRefresh(!refresh);
        setText(""); // Clear the input after adding a new note
      })
      .catch((error) => {
        console.error(error);
        ToastAndroid.show("Error adding post", ToastAndroid.LONG);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // Additional actions after the refresh state changes if needed
  }, [refresh]);

  return (
    <View>
      <View style={{ marginTop: 50 }}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>CRUD APP</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Something..."
            value={text}
            style={styles.noteTextArea}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={createNewNote}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Add</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 30,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    
  },
  addButton: {
    backgroundColor: "#03001C",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    borderColor: "#03001C",
    
  },
});
