import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import PingsBottomTabs from "./PingsBottomTabs";
import UserSettingsStack from "./UserSettingsStack";
import { useAuthContext } from "../utils/useAuthContext";

const { Navigator, Screen } = createDrawerNavigator();

export default function HomeDrawer() {
  const { logout } = useAuthContext();

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={logout} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Screen name="Feed" component={PingsBottomTabs} />
      <Screen name="User Settings" component={UserSettingsStack} />
    </Navigator>
  );
}
