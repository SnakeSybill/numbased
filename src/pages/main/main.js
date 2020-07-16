import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AdMobBanner } from 'react-native-admob';
import { Picker } from '@react-native-community/picker';

import SimpleLayout from '../simpleLayout/simpleLayout';
import styles from './styles';

const multiple = 'list';
const simple = 'rocket';
const fullArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const Home = () => {
  const options = [
    { value: 'Hexadecimal', label: 'Hexadecimal', number: 16 },
    { value: 'Decimal', label: 'Decimal', number: 10 },
    { value: 'Octal', label: 'Octal', number: 8 },
    { value: 'Binário', label: 'Binário', number: 2 }
  ];
  const [currentIcon, setCurrentIcon] = useState(multiple);

  const [valueToConvert, setValueToConvert] = useState('0');
  const [arrayValidCharacters, setArrayValidCharacters] = useState(fullArray);
  const [selectedBase1, setSelectedBase1] = useState(options[1]);

  useEffect(() => {
    console.log(selectedBase1);
    if (selectedBase1 === 'Hexadecimal') {
      setArrayValidCharacters(fullArray);
    }
    if (selectedBase1 === 'Decimal') {
      setArrayValidCharacters(fullArray.slice(0, 10));
    }
    if (selectedBase1 === 'Octal') {
      setArrayValidCharacters(fullArray.slice(0, 8));
    }
    if (selectedBase1 === 'Binário') {
      setArrayValidCharacters(fullArray.slice(0, 2));
    }

    if (!isCompatibleWithBase(valueToConvert)) {
      setValueToConvert('0');
    }
  }, [selectedBase1]);

  const isCompatibleWithBase = (value) => {
    var isCompatible = true;
    Array.from(value).forEach(x => { if (arrayValidCharacters.includes(x)) isCompatible = false })
  }

  return (
    <KeyboardAvoidingView enabled={false} style={styles.container}>
      <View style={styles.elipse} />
      <View style={styles.header}>
        <Icon name={currentIcon} size={30} color="white" onPress={() => {
          if (multiple === currentIcon)
            setCurrentIcon(simple);
          else if (simple === currentIcon)
            setCurrentIcon(multiple);
        }} />
      </View>
      <View style={styles.main}>
        <View style={styles.field}>
          <View style={styles.selectBase}>
            <Picker
              selectedValue={selectedBase1.label}
              style={{ height: 50, width: 243 }}
              onValueChange={(value, index) => {
                setSelectedBase1(options.find(element => element.value == value))
              }}
            >
              {
                options.map((option) => (
                  <Picker.Item key={option.value} label={option.label} value={option.value} />
                ))
              }

            </Picker>
          </View>

          <View style={styles.textNumberBased}>
            <TextInput
              value={valueToConvert}
              autoCapitalize={'characters'}
              onChangeText={(text) => {
                if (
                  text === '' ||
                  arrayValidCharacters.includes(text.slice(-1))
                ) {
                  setValueToConvert(text);
                };
              }}
              maxLength={16}
              style={{ paddingTop: 12, fontSize: 24 }}
            />
          </View>
        </View>
            <SimpleLayout baseOrigin={selectedBase1} valueOrigin={parseInt(valueToConvert)} />
      </View>

      <View style={styles.footer}>
        <AdMobBanner
          adSize='largeBanner'
          adUnitID='ca-app-pub-8416186485866917/5582131688'
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={(error) => console.error(error)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;