import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from "react-native";
import Colors from "../../../Common/Colors";
import Font from "../../../Common/Font";
import { debugLog } from "../../../Common/common";
const HashtagTextInput = () => {
  const [text, setText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleInputChange = (value) => {
    setText(value);
    debugLog(value);
    const lastWord = value.substring(0, cursorPosition).split(" ").pop();
    if (lastWord.startsWith("#")) {
      const tag = lastWord.substring(1);
      // Get hashtag suggestions for the last tag
      // For example:
      setSuggestions([
        "example",
        "hashtag",
        "suggestions",
        "text",
        "new",
        "or",
        "ads",
        "Asdasda",
        "asd",
        "as",
        "dfgdfg",
      ]);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelectionChange = ({ nativeEvent: { selection } }) => {
    setCursorPosition(selection.start);
  };

  const handleTagSelection = (tag) => {
    // Insert selected tag at the cursor position
    const lastWordStart = text.substring(0, cursorPosition).lastIndexOf("#");
    const newValue = `${text.substring(
      0,
      lastWordStart
    )}#${tag} ${text.substring(cursorPosition)}`;
    setText(newValue);
    setShowSuggestions(false);
    setCursorPosition(lastWordStart + tag.length + 2);
  };
  const renderText = () => {
    if (!text) {
      return null;
    }
    const regex = /(\s|^)(#\w+)\b/g;
    const textArray = text.split(regex);
    return textArray.map((text, index) => {
      if (text.match(regex)) {
        return (
          <Text key={index} style={styles.blueText}>
            {text}
          </Text>
        );
      }
      return <Text key={index}>{text}</Text>;
    });
  };
  return (
    <View>
      <ScrollView>
        <TouchableHighlight>
          <TextInput
            style={{
              height: 170,
              width: "100%",
              backgroundColor: "#f7f8fa",
              borderRadius: 7,
              borderColor: "#d4d4d7",
              borderWidth: 0.7,
              fontFamily: Font.txt_normal,
              color: Colors.skip_txt,
              paddingHorizontal: 5,
            }}
            textAlignVertical="top"
            placeholder={"Write Something here..."}
            placeholderTextColor={Colors.placeholder_txt}
            multiline
            onChangeText={handleInputChange}
            onSelectionChange={handleSelectionChange}
          >
            {renderText()}
          </TextInput>
        </TouchableHighlight>
        {showSuggestions && (
          <View
            style={{
              height: 140,
              borderRadius: 5,
              backgroundColor: "#f7f8fa",
              elevation: 1,
            }}
          >
            <ScrollView>
              {suggestions.map((tag) => (
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.drop_txt,
                    borderBottomWidth: 0.6,
                    padding: 5,
                    fontFamily: Font.txt_medium,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderBottomColor: Colors.border,
                  }}
                  key={tag}
                  onPress={() => handleTagSelection(tag)}
                >
                  {"#" + tag}
                </Text>
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  blueText: {
    color: "blue",
  },
});

export default HashtagTextInput;
