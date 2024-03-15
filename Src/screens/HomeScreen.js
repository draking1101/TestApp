// 導入元件
// import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// UI渲染
export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35 }}>Home</Text>
            <Button
                title='Go to next page'
                onPress={() => props.navigation.push('HomeDetailsScreen')}>
            </Button>
        </View>
    )
};

// 樣式表
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});