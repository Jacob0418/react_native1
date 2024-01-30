import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, color: 'black', fontWeight: '500'}}>TOCA EL BOTÓN</Text>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Cerrado');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Mi Primer Botón</Text>
            <TouchableHighlight
              style={[styles.button, styles.buttonOpenClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight onPress={() => setModalVisible(true)} style={[styles.button, styles.buttonOpenClose]}>
        <Text style={styles.textStyle}>TÓCAME</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e0e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 8,
    borderRadius: 7,
    marginTop: 8
  },
  buttonOpenClose: {
    backgroundColor: '#87ceeb'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 0,
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 7,
    padding: 15,
    alignItems: 'center',
  }
});
