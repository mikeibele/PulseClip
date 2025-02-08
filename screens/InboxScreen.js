import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notifications = [
  { id: '1', message: 'Someone liked your video' },
  { id: '2', message: 'New follower: @user123' },
];

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.notification}>{item.message}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  notification: { fontSize: 16, marginVertical: 10, color: '#333' },
});

export default InboxScreen;
