import React, { useState } from 'react';
import { TextInput, Animated, StyleSheet } from 'react-native';

export default function Input({ label, value, onChangeText, isError, isPasswordEmpty } : any) {
    const [isFocused, setIsFocused] = useState(false);
    const animatedPlaceholderY = new Animated.Value(isFocused || value ? -20 : 0);

    const handleFocus = () => {
        setIsFocused(true);
        Animated.timing(animatedPlaceholderY, {
            toValue: -20,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setIsFocused(false);
        Animated.timing(animatedPlaceholderY, {
            toValue: value ? -20 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    return (
        <Animated.View style={styles.container}>
            <Animated.Text
                style={{
                    position: 'absolute',
                    left: 5,
                    top: animatedPlaceholderY,
                    fontSize: isFocused || value ? 14 : 16,
                    color: isFocused || value ? '#000' : 'darkgray',
                }}
            >
                {label}
            </Animated.Text>
            <TextInput
                placeholderTextColor={isError || isPasswordEmpty ? 'red' : '#000'}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onChangeText={onChangeText}
                selectionColor="#000"
                secureTextEntry={label === 'Senha'}
                style={[
                    styles.input,
                    { borderBottomColor: isError || isPasswordEmpty ? 'red' : 'darkgray' && label === 'Senha' ? 'darkgray' : isError || isPasswordEmpty ? 'red' : 'darkgray' },
                ]}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: '100%',
    },
    input: {
        width: '100%',
        height: 40,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderWidth: 2,
        color: '#000',
        paddingLeft: 5,
        textAlign: 'center',
    },
});
