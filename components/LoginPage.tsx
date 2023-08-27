import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {updateFormData} from './store/actions';

const LoginPage = ({updateFormData, navigation}) => {
  const handleEnteredValue = (key: string, value: string) => {
    updateFormData(key, value);
  };

  const handleSubmit = () => {
    navigation.navigate('Response');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome</Text>

      <View style={styles.contain}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18}}>First Name: </Text>
          <TextInput
            style={styles.input}
            placeholder="John"
            onChangeText={value => {
              handleEnteredValue('f_name', value);
            }}
          />
        </View>

        <View style={{flex: 1}}>
          <Text style={{fontSize: 18}}>Last Name: </Text>
          <TextInput
            style={styles.input}
            placeholder="Wick"
            onChangeText={value => {
              handleEnteredValue('l_name', value);
            }}
          />
        </View>
      </View>

      <View style={styles.bottomContain}>
        <Text style={{fontSize: 18}}>Email:</Text>
        <TextInput
          style={{flex: 1, ...styles.input}}
          placeholder="abc@email.com"
          keyboardType="email-address"
          onChangeText={value => {
            handleEnteredValue('email', value);
          }}
        />
      </View>

      <View style={styles.bottomContain}>
        <Text style={{fontSize: 18}}>Phone No.: </Text>
        <TextInput
          style={{flex: 1, ...styles.input}}
          placeholder="Enter 10 digit number"
          keyboardType="phone-pad"
          onChangeText={value => {
            handleEnteredValue('ph_no', value);
          }}
        />
      </View>

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: {formData: any}) => ({
  formData: state.formData,
});

const mapDispatchToProps = {
  updateFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

const styles = StyleSheet.create({
  container: {flexDirection: 'column', gap: 6, margin: 12},
  header: {textAlign: 'center', fontSize: 30, marginBottom: 20},
  contain: {flexDirection: 'row', gap: 40, marginBottom: 12},
  input: {height: 40, borderBottomWidth: 1, fontSize: 15},
  bottomContain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 12,
  },
  button: {marginTop: 10, marginHorizontal: 80},
});
