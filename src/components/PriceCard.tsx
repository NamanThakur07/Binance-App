import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const PriceCard = React.memo(({ item, previousPrice, isDarkMode }: any) => {
  const isPriceUp = item.price > previousPrice;
  const bgColor = isPriceUp
    ? isDarkMode ? '#203c2d' : '#e8fff3'
    : isDarkMode ? '#402020' : '#ffeaea';

  const borderColor = isPriceUp ? '#28a745' : '#dc3545';
  const icon = isPriceUp ? '📈' : '📉';
  const textColor = isPriceUp ? '#28a745' : '#dc3545';

  return (
    <View style={[
      styles.card,
      {
        backgroundColor: bgColor,
        borderLeftColor: borderColor,
        shadowColor: isDarkMode ? '#000' : '#ccc',
      }
    ]}>
      <Text style={styles.icon}>{icon}</Text>
      <View>
        <Text style={[styles.price, { color: textColor }]}>${item.price.toFixed(2)}</Text>
        <Text style={[styles.time, { color: isDarkMode ? '#aaa' : '#6b7280' }]}>
          {item.time.toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({



  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    marginTop: 4,
  },
});