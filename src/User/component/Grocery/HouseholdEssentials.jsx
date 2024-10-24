import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HouseholdEssentials = () => {
  return (
    <View>
      <Text style={{color:"#3b3b3b",fontSize:17,fontWeight:"700",marginHorizontal:10}}>Household Essentials</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={require("../../../assets/images/fruitsandvegetables.png")} />
          </View>
          <Text style={styles.maintxt}>Vegetable & Fruits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={require("../../../assets/images/attaricedal.png")} />
          </View>
          <Text style={styles.maintxt}>Atta, Rice & Dal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={require("../../../assets/images/oilgheeandmasala.png")} />
          </View>
          <Text style={styles.maintxt}>Vegetable & Fruits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={require("../../../assets/images/Kitchenware&Appliances.png")} />
          </View>
          <Text style={styles.maintxt}>Kitchenware & Appliances</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HouseholdEssentials

const styles = StyleSheet.create({
    container:{
      padding:10,
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"space-between"
    },
    card:{
      justifyContent:"center",
      alignItems:"center"
    },
    maintxt:{
      textAlign:"center",
      color:"#3b3b3b",
      fontWeight:"600",
      width:85,
      marginBottom:10,
      fontSize:13
    },
    imgContainer:{
      backgroundColor:"#e5f3f3",
      width:85,
      height:85,
      borderRadius:15,
      marginBottom:5,
      justifyContent:"center",
      alignItems:"center",
      padding:10
    },
    img:{
      resizeMode:"contain",
      width:75,
      height:75,
    }
  })