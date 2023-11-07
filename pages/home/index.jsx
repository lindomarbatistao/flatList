import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import styles from './styles'

export default function Home({ navigation }) {

    const list = [
        {
            name: 'Bruna',
            age: 22,
            foto: 1
        },
        {
            name: 'Amanda',
            age: 25,
            foto: 2
        },
        {
            name: 'Camila',
            age: 20,
            foto: 3
        },
        {
            name: 'Thifanny',
            age: 28,
            foto: 4
        },
        {
            name: 'Danny',
            age: 21,
            foto: 5
        }
    ]

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 15 }}>
                <FlatList
                    data={list}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <Shadow>
                                <View style={styles.quadro}>
                                    <TouchableOpacity
                                        onPress={()=>{navigation.navigate('Edit', {
                                            nome: item.name,
                                            idade: item.age,
                                            foto: item.foto
                                        })}}
                                    >
                                        <Image source={require('../../assets/image-' + item.foto + '.png')} style={{ width: 100, height: 100 }} />
                                        <Text>{item.name}</Text>
                                        <Text>{item.age}</Text>
                                    </TouchableOpacity>
                                </View>
                            </Shadow>
                        )
                    }}
                />
            </View>
        </View>
    )
}