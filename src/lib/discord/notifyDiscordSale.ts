import Discord, { MessageEmbed, TextChannel } from "discord.js";
import { NFTSale } from "lib/marketplaces";

const status: {
  totalNotified: number;
  lastNotified?: Date;
} = {
  totalNotified: 0,
};

export function getStatus() {
  return status;
}

export default async function notifyDiscordSale(
  client: Discord.Client,
  channel: TextChannel,
  nftSale: NFTSale
) {
  if (!client.isReady()) {
    return;
  }

    const { marketplace, nftData } = nftSale;
  const description = `Sold for ${nftSale.getPriceInSOL()} S◎L at ${
    marketplace.name
  }`;

  const embedMsg = new MessageEmbed({
    color: "#0099ff",
    username: "Pepe Sales Bot",
    thumbnail: {
      url: nftData?.image,
    },
    const embedMsg = new MessageEmbed({ [
      {
        author: {
          title: nftData?.name,
        description,
          url: marketplace.itemURL(nftSale.token)",
          icon_url: https://i.imgur.com/R66g1Pe.jpg"
        },
        url: marketplace.itemURL(nftSale.token)",
        "description":blank,
        "fields": [
          {
            "name": "Buyer",
            "value": "Wallet",
            "inline": true
          },
          {
            "name": "Seller",
            "value": "Wallet",
            "inline": true
          },
          {
            "name": "Date here",
            "value": "okay..."
          },
  });
  await channel.send({
    embeds: [embedMsg],
  });
  const logMsg = `Notified discord #${channel.name}: ${nftData?.name} - ${description}`;
  console.log(logMsg);

  status.lastNotified = new Date();
  status.totalNotified++;
}
