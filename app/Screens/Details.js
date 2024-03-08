// Details.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  TouchableWithoutFeedback,
  TextInput,
  ToastAndroid,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalApi from "../../API/GlobalApi";

export default function Details() {
  const [notes, setNotes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    GlobalApi.GetNote().then((resp) => {
      setNotes(
        resp?.notes.map((note) => ({
          ...note,
          isEditing: false,
          editText: note.text, // Add editText for editing
        })) || []
      );
      setRefreshing(false);
    });
  };

  const handleDelete = (id) => {
    GlobalApi.DeleteNote(id).then(() => {
      console.log("Note deleted with ID:", id);
      getNotes();
      ToastAndroid.show("Delete Successfully", ToastAndroid.LONG);
    });
  };

  const handleUpdate = (id, newText) => {
    console.log("Updating note with ID:", id, "to text:", newText);

    GlobalApi.UpdateNote(id, newText)
      .then((response) => {
        console.log("Update successful. Response:", response);
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === id ? { ...note, text: newText } : note
          )
        );
      })
      .catch((error) => {
        console.error("Update failed. Error:", error);
        // Handle errors appropriately
      });
  };

  const handleEdit = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].isEditing = true;
    setNotes(updatedNotes);
  };

  const handleSave = (id, index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].isEditing = false;
    handleUpdate(id, updatedNotes[index].editText);

    // Show Toast notification for successful save
    ToastAndroid.show("Save Successfully", ToastAndroid.LONG);
  };

  const onRefresh = () => {
    setRefreshing(true);
    getNotes();
  };

  const handleScreenTouch = () => {
    if (notes.length === 0) {
      // If there is no data, trigger refresh
      onRefresh();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <View>
        {notes.length === 0 ? (
          <Text style={styles.noDataText}>Tap Refresh</Text>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item, index }) => (
              <View style={styles.textContainer}>
                {item.isEditing ? (
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        borderColor: "white",
                        borderWidth: 1,
                        padding: 5,
                        marginRight: 20,
                      },
                    ]}
                    value={item.editText}
                    onChangeText={(text) => {
                      const updatedNotes = [...notes];
                      updatedNotes[index].editText = text;
                      setNotes(updatedNotes);
                    }}
                  />
                ) : (
                  <Text style={styles.text}>{item?.text.substring(0, 20)}</Text>
                )}
                <View style={styles.iconContainer}>
                  {item.isEditing ? (
                    <TouchableOpacity
                      onPress={() => handleSave(item?.id, index)}
                    >
                      <MaterialIcons name="save-as" size={30} color="white" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => handleEdit(index)}>
                      <MaterialIcons name="edit" size={30} color="white" />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={() => handleDelete(item?.id)}>
                    <MaterialIcons
                      name="delete-forever"
                      size={30}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()} // Specify a unique key for each item
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={["#40A2E3"]}
              />
            }
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
    paddingLeft: 10,
  },
  textContainer: {
    marginTop: 20,
    margin: 10,
    backgroundColor: "#03001C",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
    paddingLeft: 10,
    flex: 1,
    borderRadius: 5,
  },
  iconContainer: {
    gap: 20,
    flexDirection: "row",
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    marginTop: 100,
  },
});
