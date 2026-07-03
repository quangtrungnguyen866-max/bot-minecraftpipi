const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: '144.31.46.5',
    port: 11608,
    username: 'Bot_Pipi',
    version: '1.21.1', // Giao thức tương thích 1.21.11
    physicsEnabled: false, // Tắt vật lý để bot đứng im tuyệt đối
    checkTimeoutInterval: 120000 // Tăng thời gian phản hồi
});

bot.on('spawn', () => {
    console.log('Bot_Pipi đã vào game thành công!');
});

bot.on('end', (reason) => {
    console.log(`Bot bị văng. Lý do: ${reason}. Đang đợi 90s để kết nối lại...`);
    setTimeout(() => {
        process.exit(1); // Trigger Railway khởi động lại bot
    }, 90000);
});

bot.on('error', (err) => {
    console.log('Lỗi kết nối:', err.message);
});
