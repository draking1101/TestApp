// 導入元件
// import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Mybutton(props) {
    return (
        <TouchableOpacity onPress={props.Myonpress} >
            <Text style={props.style}>{props.Mytitle}</Text>
        </TouchableOpacity>
    )
}

Mybutton.propTypes = {
    Mytitle: PropTypes.string.isRequired,
    Myonpress: PropTypes.func,
}

Mybutton.defaultProps = {
    Mytitle: 'Use "Mytitle" "style" \nto Change button'
}



export default Mybutton