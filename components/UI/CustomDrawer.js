import React from "react";
import { Button, SafeAreaView, View } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as authActions from "../../store/actions/auth";

export const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <DrawerNavigatorItems {...props} />
        <Button
          title="Logout"
          color={Colors.primary}
          onPress={() => {
            dispatch(authActions.logout());
          }}
        />
      </SafeAreaView>
    </View>
  );
};
