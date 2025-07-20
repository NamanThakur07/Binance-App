# 📲 Binance BTC/USDT Live Price Tracker

This is a **React Native mobile application** that connects to the **Binance WebSocket API** to show real-time BTC/USDT price updates. It displays the data in a visually engaging and performance-optimized UI, supporting both **light and dark mode** based on system settings.

---

## 🚀 Features

✅ Real-time updates using WebSocket  
✅ Live BTC/USDT pricing with timestamp  
✅ Color-coded price cards (📈 up in green, 📉 down in red)  
✅ Price trend shown in a dynamic line chart  
✅ Optimized UI using `React.memo`, `useMemo`, and `useCallback`  
✅ Light & Dark mode support  
✅ Smooth UI with modern card design and icons  

---

## 🌐 WebSocket Used

We use Binance's public WebSocket endpoint:
wss://stream.binance.com:9443/ws/btcusdt@trade


Every trade event provides:
- `p`: price
- `T`: timestamp (converted to readable time)

---

## 📁 Project Structure

crypto-tracker/
│
├── src/
│ ├── screens/
│ │ └── HomeScreen.tsx
│ └── services/
│ └── WebSocketService.ts
│
├── App.tsx // Entry point
├── package.json
└── README.md 




---

## ⚙️ Setup Instructions

### 1. 📥 Clone the repository
```bash
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker


npm install




📱 Run the App
Android (React Native CLI)
bash
npx react-native run-android


iOS (Mac Only)
bash
npx react-native run-ios


OR using Expo (if using Expo)
bash
npx expo start



🧠 How It Works
WebSocket Connection
Upon app launch, the WebSocketService.ts connects to Binance’s WebSocket stream.

Listening to Trade Events
Each message is parsed and the BTC price and timestamp are extracted.

State Update
The latest trade data is stored in a state array and limited to the last 50 records.

Rendering Price Data

A line chart shows a smooth trend of the latest 50 prices.

A FlatList shows color-coded cards with emoji indicators and timestamps.

Dynamic Theming

Uses useColorScheme() to switch between light and dark UI seamlessly.


🌗 Light & Dark Mode
Automatically detects and adapts to the device's current theme.

Adjusts background colors, text, card borders, and chart styling accordingly.




---

Would you like me to generate a **real GitHub README preview** or help you create a matching **GitHub repo with starter files** for this app?

![WhatsApp Image 2025-07-20 at 9 38 31 AM](https://github.com/user-attachments/assets/2709180d-673a-4f85-8c47-58c4026e820b)
![WhatsApp Image 2025-07-20 at 9 38 30 AM](https://github.com/user-attachments/assets/3fb4bdab-d14b-4a16-a4cc-2b3f99439057)
