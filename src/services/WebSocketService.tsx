// services/WebSocketService.js
export const connectToBinance = (onMessage:any) => {
  const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

  socket.onopen = () => console.log("Socket Connected");

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage({
      price: parseFloat(data.p),
      time: new Date(data.T),
    });
  };

  socket.onerror = (error) => console.error("WebSocket Error:", error);
  socket.onclose = () => console.log("🔌 WebSocket Disconnected");

  return socket;
};
