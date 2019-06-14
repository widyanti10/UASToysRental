import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableHighlight,TextInput, Alert} from "react-native";
import Header from "./Header";
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
      super(props);
      this.state = {username: '',password: '',};
  }
  Login= () =>{
    if(this.state.username == 'A' && this.state.password == '1'){
      this.props.navigation.navigate('Usia')
    }else{
      Alert.alert('Masukan username dan password dengan benar!');
    }
  }
    render() {
        return (
          <View style={styles.containerMain}>
                <Header judul={"Little Bunny Toys Rental"} />
            <View style={styles.box2}>
              <View>
                <Image source={require("./img/314770.jpg")} style={styles.image} />
              </View>
            </View>
            <View style={styles.box1}>
              <Text style={styles.Text}>LOGIN</Text>
                <View style={styles.textInput}>
                    <TextInput style={{textAlign: 'center', color: 'black'}} placeholder=" Masukan Username " onChangeText={(username) => this.setState({ username })}/>
                </View>
                <View style={styles.textInput}>
                    <TextInput style={{textAlign: 'center', color: 'black'}} placeholder=" Masukan Password "onChangeText={(password) => this.setState({ password })}/>
                </View>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.Login()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
            </View>
          </View>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    backgroundColor: '#7C3B81',
  },
  image: {
    height: 200,
    width: 300,
  },
  Text: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#5E2E62",
    fontSize: 18
  },
  buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#5E2E62",
    marginTop:20,
    marginBottom: 20,
    height: 40,
    width: 150,
    borderRadius: 5
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18
  },
  box1: {
    backgroundColor: 'white',
    marginTop:10,
    height: 200,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
  },
  box2: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    marginBottom:20,
    flexDirection: "column",
    alignItems: "center"
  },
  textInput: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#7C3B81',
    borderWidth: 1,
    justifyContent: 'center',
    height: 35,
    width: 230,
    marginTop: 10,
    borderRadius: 5,
},
});
export default Login;