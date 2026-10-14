import { NativeTabs } from 'expo-router/native-tabs';

// EXPO_PUBLIC_WORKAROUND=1 forwards the react-native-screens props that expo-router drops.
const workaround = process.env.EXPO_PUBLIC_WORKAROUND === '1';

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="(home)">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger
        name="search"
        role="search"
        unstable_nativeProps={
          workaround ? { ios: { role: 'search', automaticallyActivatesSearch: true } } : undefined
        }
      >
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="magnifyingglass" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
