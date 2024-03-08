import React, { useState, useEffect } from "react";
import { View, Text, r } from "react-native";
import Addpost from "../Addpost";
import Details from "../Details";

export default function Home() {
  return (
    <View>
      <Addpost/>
      <Details />
    
    </View>
  );
}
