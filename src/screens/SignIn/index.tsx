import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native'
import { Background } from '../../components/Background'

export function SignIn() {
  const { navigate } = useNavigation()

  function handleSignIn() {
    navigate('Home')
  }

  return (
    <Background >
      <View style={styles.container}>
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title="Entrar com Discord" 
            onPress={handleSignIn} 
          />
        </View>
      </View>
    </Background>
  )
}