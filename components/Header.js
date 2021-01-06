import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {zomatoSearch} from '../actions/zomatoAction';

const Header = () => {
  const dispatch = useDispatch();
  const [texxt, setTexxt] = useState('');

  const submitt = (e) => {
    e.preventDefault();
    dispatch(zomatoSearch(texxt));
    console.log(texxt);
  };
  const onChange = (textvalue) => setTexxt(textvalue);
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Zomato</Text>

      {/* <Icon name='search'/> */}
      <TextInput placeholder="Search food here" onChangeText={onChange} />
      <TouchableOpacity onPress={submitt}>
        <Text style={{backgroundColor: '#99B0BD', padding: 2, borderRadius: 2}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F50505',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
  },
});

export default Header;
