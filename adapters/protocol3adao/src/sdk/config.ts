export const LINEA_RPC1 = "https://surge.3adao.org";
export const LINEA_RPC2 = "https://1rpc.io/linea";
export const LINEA_RPC3 = "https://rpc.linea.build";
export const LINEA_RPC4 = "https://linea.blockpi.network/v1/rpc/public";
export const LINEA_RPC5 = "https://linea.decubate.com";

export const addresses = {
  vaultFactory: "0x65c6FD9B3a2A892096881e28f07c732ed128893E",
  euro3: "0x3F817b28Da4940F018C6b5c0A11C555ebB1264f9",
  a3a: "0x3d4b2132ed4ea0aa93903713a4de9f98e625a5c7",
  stabilityPool: "0x51c3db485e3b21193636a83f05b3517f691cd68c",
  cashbackPool: "0xa1bDB7f6B749Ab887Bd712c7198aFaE6F25a3c12",
  surgeHelper: "0x4fa03364c121c19C69136d75C6BC8E39c5667232",
};

export const whitelistedCollaterals: Record<number, string[]> = {
  3130793: [
    "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5",
    "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
    "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F",
    "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
  ],
  3734960: [
    "0x65D97BdFD4c1076cD1F95Cbe3B56954277d0956F",
    "0x2416092f143378750bb29b79eD961ab195CcEea5",
  ],
  3717276: ["0x333d8b480bdb25ea7be4dd87eeb359988ce1b30d"],
  4354056: [
    "0xf669C3C03D9fdF4339e19214A749E52616300E89",
    "0xad7f33984bed10518012013d4ab0458d37fee6f3",
    "0xCeEd853798ff1c95cEB4dC48f68394eb7A86A782",
    "0x9be5e24f05bbafc28da814bd59284878b388a40f",
  ],
};

// Define the type for receiptTokens
export const receiptTokens: {
  [key: string]: { underlying: string };
} = {
  // meUSDC
  "0X333D8B480BDB25EA7BE4DD87EEB359988CE1B30D": {
    underlying: "0X176211869CA2B568F2A7D4EE941E073A821EE1FF",
  },
  // meUSDT
  "0XF669C3C03D9FDF4339E19214A749E52616300E89": {
    underlying: "0XA219439258CA9DA29E9CC4CE5596924745E12B93",
  },
  // meWETH
  "0XAD7F33984BED10518012013D4AB0458D37FEE6F3": {
    underlying: "0XE5D7C2A44FFDDF6B295A15C148167DAAAF5CF34F",
  },
  // mewstETH
  "0XCEED853798FF1C95CEB4DC48F68394EB7A86A782": {
    underlying: "0XB5BEDD42000B71FDDE22D3EE8A79BD49A568FC8F",
  },
  // meWBTC
  "0X9BE5E24F05BBAFC28DA814BD59284878B388A40F": {
    underlying: "0X3AAB2285DDCDDAD8EDF438C1BAB47E1A9D05A9B4",
  },
};
