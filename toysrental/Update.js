import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight,Image } from 'react-native';
import Header from "./Header";

const axios = require('axios');
class Update extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            nama_barang:'',
            deskripsi_barang:'',
            harga:'',
            foto:'',
            id_kategori:'',
        };
    }
    render() {
        return (
            <View style={styles.containerMain}>
             <Header judul={"Update Barang"} />
             <TouchableHighlight>
                <View style={styles.uploadFoto}>
                    <Image style={styles.image}/>  
                </View>
              </TouchableHighlight>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Nama Barang </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={nama_barang => this.setState({ nama_barang })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Deskripsi Barang </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={deskripsi_barang => this.setState({ deskripsi_barang })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Harga Sewa per Hari </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={harga => this.setState({ harga })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Kategori Usia </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={id_kategori => this.setState({ id_kategori })}
                    />
                </View>
                <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableHighlight>

                </View>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: '#7C3B81',
    },
    box1: {
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
    },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "#5E2E62",
        marginBottom: 20,
        height: 40,
        width: "45%",
        borderRadius: 5,
    },
    buttonText:{
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 17,
      },
    box2: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
    },
    Text:{
        textAlign: "center",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 13,
      },
    image:{
        width: 150,
        height: 150,
        marginTop: 2,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    uploadFoto:{
        width: 150,
        height: 150,
        marginTop: 10,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default Update;