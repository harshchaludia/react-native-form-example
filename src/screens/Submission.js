import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Submission = () => {
  return <View style={styles.ContainerView}>
      <Text style={styles.FirstText}>Form Successfully</Text>
      <Text style={styles.SecondText}>Submitted</Text>
  </View>;
};

const styles = StyleSheet.create({
  ContainerView: {
      backgroundColor: '#20263f',
      flex: 1,
      justifyContent: 'center'
  },
  FirstText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  SecondText: {
    fontSize: 40,
    color: '#00e08b',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default Submission;
