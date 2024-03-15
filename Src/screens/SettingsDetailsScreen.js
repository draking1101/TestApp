// 導入元件
// import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

// UI渲染
export default function SettingsDetailsScreen() {


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35 }}>SettingDetails</Text>
        </View>
    )
};

// 樣式表
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfc5ae',
        alignItems: 'center',
        justifyContent: 'center',
    },
});