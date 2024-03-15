// 導入元件
// import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

// UI渲染
export default function SettingsScreen(props) {


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35 }}>Setting</Text>
            <Button
                title='Go to next page'
                onPress={() => props.navigation.push('SettingsDetailsScreen')}>
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