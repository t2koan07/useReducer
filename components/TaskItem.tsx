import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import type { Todo } from "../hooks/useTodos";

interface TaskItemProps {
  task: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.row}>
      <Pressable style={styles.textContainer} onPress={onToggle}>
        <Text style={[styles.text, task.done && styles.doneText]}>
          {task.title}
        </Text>
      </Pressable>

      <Pressable style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  deleteText: {
    fontSize: 16,
    color: "red",
  },
});

export default TaskItem;
