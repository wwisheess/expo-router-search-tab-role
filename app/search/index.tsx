import { Stack } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text } from 'react-native';

export default function Search() {
  const [query, setQuery] = useState('');
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Search',
          headerSearchBarOptions: {
            placeholder: 'Search',
            onChangeText: (e) => setQuery(e.nativeEvent.text),
          },
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{ padding: 16 }}>Query: {query}</Text>
      </ScrollView>
    </>
  );
}
