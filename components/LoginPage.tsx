import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    ph_no: '',
  });
  const navigation  = useNavigation();
  const handleEnteredValue = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    navigation.navigate('Response');
  };

  return (
    <SafeAreaView style={{flexDirection: 'column', gap: 6, margin: 12}}>
      <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 20}}>
        Welcome
      </Text>

      <View style={{flexDirection: 'row', gap: 40}}>
        <View style={{flex: 1}}>
          <Text>First Name: </Text>
          <TextInput
            style={{height: 35, borderBottomWidth: 1}}
            placeholder="John"
            onChangeText={value => {
              handleEnteredValue('f_name', value);
            }}
          />
        </View>

        <View style={{flex: 1}}>
          <Text>Last Name: </Text>
          <TextInput
            style={{height: 35, borderBottomWidth: 1}}
            placeholder="Wick"
            onChangeText={value => {
              handleEnteredValue('l_name', value);
            }}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <Text>Email:</Text>
        <TextInput
          style={{height: 35, flex: 1, borderBottomWidth: 1}}
          placeholder="abc@email.com"
          keyboardType="email-address"
          onChangeText={value => {
            handleEnteredValue('email', value);
          }}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <Text>Phone No.: </Text>
        <TextInput
          style={{height: 35, flex: 1, borderBottomWidth: 1}}
          placeholder="Enter 10 digit number"
          onChangeText={value => {
            handleEnteredValue('ph_no', value);
          }}
        />
      </View>

      <View style={{marginTop: 20, marginHorizontal: 80}}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
