import React, { useState } from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';

const Vectores: React.FC<{ numeros: number[] }> = ({ numeros }) => {
  const [numerosPares, setNumerosPares] = useState<number[]>([]);
  const [numerosImpares, setNumerosImpares] = useState<number[]>([]);

  const clasificarNumeros = () => {
    const { pares, impares } = clasificarParesImpares(numeros);
    setNumerosPares(pares);
    setNumerosImpares(impares);
  };

  const clasificarParesImpares = (nums: number[]) => {
    const pares = nums.filter(num => num % 2 === 0);
    const impares = nums.filter(num => num % 2 !== 0);
    return { pares, impares };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Números en el Vector: {numeros.join(', ')}</Text>
      <Button title="Clasificar" onPress={clasificarNumeros} />

      <View style={styles.section}>
        <Text style={styles.text}>Pares :</Text>
        <FlatList
          data={numerosPares}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <Text style={styles.listItem} key={item}>{item}</Text>}
          horizontal
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>Impares:</Text>
        <FlatList
          data={numerosImpares}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <Text style={styles.listItem} key={item}>{item}</Text>}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    marginRight: 8,
  },
});

export default Vectores;
