import {View, TextInput, Button, StyleSheet, Text} from "react-native"

const App = () => {
  return (
    <View>
      <View style= {styles.buscador}>
        <TextInput style={styles.texto} />
        <Button title="Buscar"/>
      </View>
      
      <View style={styles.itemsConteiner}>
        <View style={styles.item}>
          <Text>Item 1</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 2</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 3</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 4</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 5</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 6</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 7</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  buscador: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    backgroundColor: "white",
  },
  texto: {
    width: "80%",
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10
  },
  itemsConteiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 50,
    flexWrap: "wrap",
  },
  item: {
    padding: 40,
    margin: 20,
    backgroundColor: "gray",
  }
})

export default App;