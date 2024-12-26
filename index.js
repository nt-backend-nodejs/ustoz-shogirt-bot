import { bot } from "./src/bot/index.js";

(async () => {
  await bot.start();
})();


// setTimeout(async ()=>{
//   const botInfo = await bot.api.getMe();
//   console.log(botInfo)
// }, 1000)

