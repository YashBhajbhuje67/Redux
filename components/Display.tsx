import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';

const Display = ({formData}) => {
  return (
    <SafeAreaView
      style={styles.container}>
      <Text style={styles.header}>Your Entered Data</Text>
      <View style={styles.viewContain}>
        <View style={styles.contain}>
          <Text style={{fontSize: 18}}>First Name: </Text>
          <Text style={{fontSize: 18}}>{formData.f_name}</Text>
        </View>

        <View style={styles.contain}>
          <Text style={{fontSize: 18}}>Last Name: </Text>
          <Text style={{fontSize: 18}}>{formData.l_name}</Text>
        </View>

        <View style={styles.contain}>
          <Text style={{fontSize: 18}}>Email: </Text>
          <Text style={{fontSize: 18}}>{formData.email}</Text>
        </View>

        <View style={styles.contain}>
          <Text style={{fontSize: 18}}>Phone No.: </Text>
          <Text style={{fontSize: 18}}>{formData.ph_no}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  formData: state.formData, 
});

export default connect(mapStateToProps)(Display);

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 12,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'column',
    gap: 20,
  },
  header: {textAlign: 'center', fontSize: 30},
  viewContain: {flexDirection: 'column', gap: 10},
  contain: {flexDirection: 'row', gap: 4},
});