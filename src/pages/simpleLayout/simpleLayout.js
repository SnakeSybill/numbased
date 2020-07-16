import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';

import styles from './styles';

const SimpleLayout = ({ baseOrigin, valueOrigin }) => {

    const options = [
        { value: 'Hexadecimal', label: 'Hexadecimal', number: 16 },
        { value: 'Decimal', label: 'Decimal', number: 10 },
        { value: 'Octal', label: 'Octal', number: 8 },
        { value: 'Binário', label: 'Binário', number: 2 }
    ];
    const [selectedBase2, setSelectedBase2] = useState(options[0]);
    return (
        <>
            <Text style={{ fontSize: 64, color: 'white' }}>=</Text>
            <View style={styles.field}>
                <View style={styles.selectBase}>
                    <Picker
                        selectedValue={selectedBase2.label}
                        style={{ height: 50, width: 243 }}
                        onValueChange={(value, index) => {
                            setSelectedBase2(options.find(element => element.value == value))
                        }}
                    >
                        {
                            options.map((option) => (
                                <Picker.Item key={option.value} label={option.label} value={option.value} />
                            ))
                        }

                    </Picker>
                </View>
                <View style={styles.textNumberBased2}>
                    <Text style={{ paddingTop: 12, fontSize: 24, color: 'black' }}>
                        {parseInt(valueOrigin, baseOrigin.number).toString(selectedBase2.number) === 'NaN'
                            ? '0'
                            : parseInt(valueOrigin, baseOrigin.number).toString(selectedBase2.number).length <= 16
                                ? parseInt(valueOrigin, baseOrigin.number).toString(selectedBase2.number).toUpperCase() //convertedValue.toUpperCase()
                                : 'Valor excedido'}
                    </Text>
                </View>
            </View>
        </>
    )
}
export default SimpleLayout;