import { TouchableOpacity, Text } from 'react-native';

export default function Button({text, onPress, styleButton, styleText}) {
    return (
        <TouchableOpacity onPress={onPress} style={styleButton}>
            <Text style={styleText}>{text}</Text>
        </TouchableOpacity>
    );
}