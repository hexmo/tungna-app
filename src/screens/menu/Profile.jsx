import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCard from "../../components/ProfileCard";
import OldOrders from "../product/OldOrders";

const Profile = () => {
  return (
    <>
      <ProfileCard />
      <OldOrders />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
