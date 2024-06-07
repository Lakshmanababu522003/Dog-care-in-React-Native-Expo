import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Admin', details: 'Thanks for your appointment', date: '2024-02-14', time: '10:00 AM', read: false },
    { id: 2, title: 'Doctor', details: 'okie i will take care', date: '2024-02-13', time: '11:30 AM', read: true },
    { id: 3, title: 'Admin', details: 'Any quries please contact 9876543210', date: '2024-02-12', time: '2:45 PM', read: false },
    { id: 4, title: 'Admin', details: 'Any quries please contact 9876543210', date: '2024-02-12', time: '2:45 PM', read: false },
   
    { id: 5, title: 'Admin', details: 'Any quries please contact 9876543210', date: '2024-02-12', time: '2:45 PM', read: false },
    // Add more notifications as needed
  ]);

  const toggleReadStatus = (id) => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === id) {
        notification.read = !notification.read;
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const renderNotifications = () => {
    return notifications.map(notification => (
      <View key={notification.id} style={[styles.notification, { backgroundColor: notification.read ? '#e6ffe6' : '#ffe6e6' }]}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <MaterialIcons
            name={notification.read ? 'check-circle' : 'fiber-manual-record'}
            size={24}
            color={notification.read ? '#007bff' : '#dc3545'}
            onPress={() => toggleReadStatus(notification.id)}
          />
        </View>
        <Text style={styles.notificationDetails}>{notification.details}</Text>
        <Text style={styles.notificationDateTime}>{notification.date} at {notification.time}</Text>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderNotifications()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop:50
  },
  notification: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationDetails: {
    fontSize: 16,
    marginBottom: 5,
  },
  notificationDateTime: {
    fontSize: 14,
    color: '#666',
  },
});

export default Notification;
