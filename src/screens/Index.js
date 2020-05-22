import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

const IndexScreen = ({ navigation }) => {
    const [Fname, StFname] = useState('')
    const [Lname, StLname] = useState('')
    const [Email, StEmail] = useState('')
    const [phone, StPhone] = useState('')
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const validateDetails = () => {
        if(Fname.length < 3) {
            StFname('')
        }
        else if(Lname.length < 3) {
            StLname('')
        }
        else if(regEmail.test(Email) === false) {
            StEmail('')
        }
        else if(isNaN(phone) === true || phone.length < 10) {
            StPhone('')
        }
        else {
            navigation.navigate('Success')
        }
    }

  return <View style={styles.ContainerView}>
    <View style={styles.FirstView}>
        <Text style={styles.FirstText}>ENTER THE</Text>
        <Text style={styles.SecondText}>DETAILS</Text>
    </View>
    <View style={styles.SecondView}>
        <TextInput 
            value = {Fname}
            placeholder = 'FIRSTNAME'
            placeholderTextColor = 'honeydew'
            onChangeText = {(CheckFname) => StFname(CheckFname)}
            style = {styles.input}
        />
        {Fname.length < 3 ? <Text style={styles.ErrorMessage}>
         It requires more than 3 characters
        </Text> : null }
        <TextInput 
            value = {Lname}
            placeholder = 'LASTNAME'
            placeholderTextColor = 'honeydew'
            onChangeText = {(CheckLname) => StLname(CheckLname)}
            style = {styles.input}
        />
        {Lname.length < 3 ? <Text style={styles.ErrorMessage}>
        It requires more than 3 characters
        </Text> : null }
        <TextInput 
            value = {Email}
            placeholder = 'EMAIL'
            placeholderTextColor = 'honeydew'
            onChangeText = {(CheckEmail) => StEmail(CheckEmail)}
            style = {styles.input}
        />
        {regEmail.test(Email) === false ? <Text style={styles.ErrorMessage}>
           It has to be an email
    </Text> : null }
        <TextInput 
            value = {phone}
            placeholder = 'MOBILE'
            placeholderTextColor = 'honeydew'
            onChangeText = {(CheckPhone) => StPhone(CheckPhone)}
            style = {styles.input}
        />
        {isNaN(phone) === true || phone.length < 10 ? <Text style={styles.ErrorMessage}>
          The phone number has to be valid
    </Text> : null }
    </View>
    <View style={styles.ThirdView}>
        <TouchableOpacity onPress = {() => validateDetails()}>
            <View style = {styles.NextButton}>
                <Text style = {styles.buttonText}>
                    NEXT
                </Text>
            </View>
        </TouchableOpacity>
        <View style={{flex: 1}}></View>
        <TouchableOpacity onPress = {() => {
            StFname('')
            StLname('')
            StEmail('')
            StPhone('')
        }}>
            <View style = {styles.ClearButton}>
                <Text style = {styles.buttonText}>
                    CLEAR
                </Text>
            </View>
        </TouchableOpacity>
    </View>
    <View style={{marginHorizontal: 25, marginTop: 25}}>

    </View>
  </View>;
};

IndexScreen.navigationOptions = () => {
    return {
        headerTintColor: '#20263f'
    }
}

const styles = StyleSheet.create({
    ContainerView: {
        backgroundColor: '#20263f',
        flex: 1
    },
    FirstView: {
        alignItems: 'flex-end',
        marginHorizontal: 25,
        marginTop: 70,
        marginBottom: 15
    },
    SecondView: {
        marginHorizontal: 25,
        marginBottom: 25
    },
  FirstText: {
    fontSize: 40,
    color: '#00e08b',
    fontWeight: 'bold'
  },
  ErrorMessage: {color: 'grey', fontSize: 12},
  SecondText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold'
  },
  input: {
    borderBottomColor: '#fff',
    color: '#fff',
    paddingVertical: 20,
    fontSize: 25,
    borderBottomWidth: 1
  },
  ThirdView: {
      flexDirection: 'row',
      marginHorizontal: 25
  },
  NextButton: {
      backgroundColor: '#00e08b',
      height: 60,
      width: 200,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      marginTop: 20

  },
  ClearButton: {
      backgroundColor: '#00e08b',
      height: 60,
      width: 125,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginTop: 20
  },
  buttonText: {
      fontSize: 28,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#fff'
  },

});

export default IndexScreen;
