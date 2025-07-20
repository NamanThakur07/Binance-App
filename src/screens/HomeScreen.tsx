import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { connectToBinance } from '../services/WebSocketService';
import { LineChart } from 'react-native-chart-kit';
import { PriceCard } from '../components/PriceCard';



export default function HomeScreen() {
  const [prices, setPrices] = useState<any>([]);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  useEffect(() => {
    const socket = connectToBinance((trade: any) => {
      setPrices((prev: any) => {
        const updated = [trade, ...prev];
        return updated.slice(0, 50);
      });
    });
    return () => socket.close();
  }, []);

  const chartData = useMemo(
    () => ({
      datasets: [
        {
          data: [...prices].reverse().map((p) => p.price),
          strokeWidth: 2,
        },
      ],
    }),
    [prices]
  );

  const renderItem = useCallback(
    ({ item, index }: any) => {
      const previousPrice = prices[index + 1]?.price || item.price;
      return <PriceCard item={item} previousPrice={previousPrice} isDarkMode={isDarkMode} />;
    },
    [prices, isDarkMode]
  );

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#111' : '#f3f4f6' },
      ]}
    >
      <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#111827' }]}>
        📈 BTC/USDT - Live Price Chart
      </Text>

      <LineChart
        data={chartData as any}
        width={Dimensions.get('window').width - 20}
        height={220}
        withShadow={false}
        withDots={false}
        withInnerLines={false}
        bezier
        chartConfig={{
          backgroundColor: isDarkMode ? '#111' : '#fff',
          backgroundGradientFrom: isDarkMode ? '#111' : '#fff',
          backgroundGradientTo: isDarkMode ? '#111' : '#fff',
          decimalPlaces: 2,
          color: (opacity = 1) => isDarkMode
            ? `rgba(255, 255, 255, ${opacity})`
            : `rgba(0, 122, 255, ${opacity})`,
          labelColor: () => isDarkMode ? '#aaa' : '#888',
        }}
        style={styles.chart}
      />

      <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#111827' }]}>
        📋 Price Updates
      </Text>
      <FlatList
        data={prices}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  chart: {
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 16,
  }
});
