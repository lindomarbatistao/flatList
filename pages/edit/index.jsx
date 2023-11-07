import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import styles from './styles'

export default function Home({ navigation, route }) {

    const { nome, idade, foto } = route.params

    return (
        <View style={styles.container}>
            <Shadow>
                <View style={styles.quadro}>
                    <Image source={require('../../assets/image-' + foto + '.png')} style={{ width: 180, height: 200 }} />
                    <Text style={styles.titulo}>{nome}</Text>
                    <Text style={styles.usuario}>{idade}</Text>
                </View>
            </Shadow>
        </View>
    )
}