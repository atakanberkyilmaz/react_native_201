import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {

    const arr = new Array(5).fill().map(() => Math.floor(Math.random() * 10));

  return (
    <View style={styles.container}>
      <Text>Header</Text>
      <Text>{JSON.stringify(arr)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 60,
        borderBottomWidth: 2,
        alignItems: "center",
        paddingBottom: 10,
    }
})

export default React.memo(Header);