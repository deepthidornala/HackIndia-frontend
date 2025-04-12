// thirdwebClient.js
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

export const client = createThirdwebClient({
  clientId: "b9164189efc185ff42292a276d18ee96", // Replace with your actual client ID from thirdweb dashboard
});

export const contract = getContract({
  client,
  chain: defineChain(11155111), // Replace with your correct chain ID if different
  address: "0xD9b9fBdE9b850813d829242Af32d2c78F28E38f6", // Your NFT drop contract address
});
