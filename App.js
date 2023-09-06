import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const [textValue, setTextValue] = useState(''); 
  const [data, setData] = useState([]); 

  const addItem = () => {
    if (textValue.trim() !== '') {
     
      setData(prevData => [...prevData, textValue]);
      
      setTextValue('');
    }

   
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribir Tarea"
          value={textValue}
          onChangeText={text => setTextValue(text)} 
        />
        <TouchableOpacity
          style= {styles.button}
          onPress={addItem}
          activeOpacity={0.7}
        >
          <Text
            style= {styles.buttonText}
          > Añadir</Text>

        </TouchableOpacity>
       
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'green',
    paddingHorizontal: 10,
    height: 50,
    marginRight: 10,
    borderRadius:10,
  },
  listItem: {
    fontSize: 30,
    marginVertical: 5,

  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
 
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  

});

