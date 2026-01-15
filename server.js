import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';

const Stack = createStackNavigator();

function ProfileScreen() {
  const handlePurchase = async (packageName, priceId) => {
    try {
      const response = await fetch('https://your-backend-url.com/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const data = await response.json();
      // Otwórz Stripe Checkout w przeglądarce
      Linking.openURL(data.url);
    } catch (err) {
      console.error(err);
      alert('Nie udało się uruchomić Stripe Checkout');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Twój profil</Text>
      <Button title="Silver $15" onPress={() => handlePurchase('Silver','price_1SpiAa639JRV7b5v8XuLdpsi')} />
      <Button title="Premium $29.99" onPress={() => handlePurchase('Premium','price_1SpiFp639JRV7b5vFrvUPG2P')} />
      <Button title="Monster $59.99" onPress={() => handlePurchase('Monster','price_1SpiIH639JRV7b5vohhmcOm9')} />
    </View>
  );
}

// Pozostałe ekrany i nawigacja pozostają jak wcześniej
