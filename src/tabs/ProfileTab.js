import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditButton from "../components/EditButton";
import { colors } from "../lib/colors";
import MainScreen from "../screens/profile/MainScreen";
import RankScreen from "../screens/profile/RankScreen";
import PlayerCardScreen from "../screens/profile/PlayerCardScreen";
import PlayerTitleScreen from "../screens/profile/PlayerTitleScreen";
import PlayerCardGridScreen from "../screens/profile/PlayerCardGridScreen";

const Stack = createNativeStackNavigator();

export default function ProfileTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerRight: EditButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        options={{ headerTitle: "" }}
        initialParams={{
          isEditable: false,
          playerRank:
            "https://media.valorant-api.com/competitivetiers/edb72a72-7e6d-6010-9591-7c053bbdbf48/13/largeicon.png",
          playerTitle: "Spicy",
          playerCard:
            "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png",
        }}
        name="ProfileMain"
        children={MainScreen}
      />
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="ProfileRank"
        children={RankScreen}
      />

      <Stack.Screen
        options={{ headerTitle: "" }}
        initialParams={{
          url: "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png",
          title: "Bird card",
        }}
        name="ProfilePlayerCard"
        children={PlayerCardScreen}
      />

      <Stack.Screen
        options={{ headerTitle: "" }}
        name="ProfilePlayerTitle"
        children={PlayerTitleScreen}
      />

      <Stack.Screen
        options={{ headerTitle: "" }}
        name="ProfilePlayerCardGrid"
        children={PlayerCardGridScreen}
      />
    </Stack.Navigator>
  );
}
