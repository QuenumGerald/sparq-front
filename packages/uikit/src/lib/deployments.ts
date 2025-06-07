import { Address } from "viem";
import {
  base,
  mainnet,
  sepolia,
  // arbitrum,
  // corn,
  // flame,
  // fraxtal,
  // hemi,
  // ink,
  // lisk,
  // mode as modeMainnet,
  // optimism,
  // plumeMainnet,
  // polygon,
  // scroll as scrollMainnet,
  // soneium,
  // sonic,
  // unichain,
  // worldchain,
} from "wagmi/chains";
// import * as customChains from "@/lib/chains";


type MorphoContractName = "Morpho";
type DeploymentDetails = { address: Address; fromBlock: bigint };
export type Deployments = {
  [chainId: number]: {
    Morpho: DeploymentDetails;
  };
};

export const DEPLOYMENTS: Deployments = {
  [mainnet.id]: {
    Morpho: { address: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb", fromBlock: 18883124n },
  },
  [base.id]: {
    Morpho: { address: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb", fromBlock: 13977148n },
  },
  [sepolia.id]: {
    Morpho: { address: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb", fromBlock: 0n },
  },
  // [ink.id]: {
  //   Morpho: { address: "0x857f3EefE8cbda3Bc49367C996cd664A880d3042", fromBlock: 4078776n },
  // },
  // [arbitrum.id]: {
  //   Morpho: { address: "0x6c247b1F6182318877311737BaC0844bAa518F5e", fromBlock: 296446593n },
  // },
  // [optimism.id]: {
  //   Morpho: { address: "0xce95AfbB8EA029495c66020883F87aaE8864AF92", fromBlock: 130770075n },
  // },
  // [polygon.id]: {
  //   Morpho: { address: "0x1bF0c2541F820E775182832f06c0B7Fc27A25f67", fromBlock: 66931042n },
  // },
  // [worldchain.id]: {
  //   Morpho: { address: "0xE741BC7c34758b4caE05062794E8Ae24978AF432", fromBlock: 9025669n },
  // },
  // [scrollMainnet.id]: {
  //   Morpho: { address: "0x2d012EdbAdc37eDc2BC62791B666f9193FDF5a55", fromBlock: 12842868n },
  // },
  // [fraxtal.id]: {
  //   Morpho: { address: "0xa6030627d724bA78a59aCf43Be7550b4C5a0653b", fromBlock: 15317931n },
  // },
  // [unichain.id]: {
  //   Morpho: { address: "0x8f5ae9CddB9f68de460C77730b018Ae7E04a140A", fromBlock: 9139027n },
  // },
  // [corn.id]: {
  //   Morpho: { address: "0xc2B1E031540e3F3271C5F3819F0cC7479a8DdD90", fromBlock: 251401n },
  // },
  // [modeMainnet.id]: {
  //   Morpho: { address: "0xd85cE6BD68487E0AaFb0858FDE1Cd18c76840564", fromBlock: 19983370n },
  // },
  // [hemi.id]: {
  //   Morpho: { address: "0xa4Ca2c2e25b97DA19879201bA49422bc6f181f42", fromBlock: 1188872n },
  // },
  // [sonic.id]: {
  //   Morpho: { address: "0xd6c916eB7542D0Ad3f18AEd0FCBD50C582cfa95f", fromBlock: 9100931n },
  // },
  // [plumeMainnet.id]: {
  //   Morpho: { address: "0x42b18785CE0Aed7BF7Ca43a39471ED4C0A3e0bB5", fromBlock: 765994n },
  // },
  // [lisk.id]: {
  //   Morpho: { address: "0x00cD58DEEbd7A2F1C55dAec715faF8aed5b27BF8", fromBlock: 15731231n },
  // },
  // [soneium.id]: {
  //   Morpho: { address: "0xE75Fc5eA6e74B824954349Ca351eb4e671ADA53a", fromBlock: 6440817n },
  // },
  // [flame.id]: {
  //   Morpho: { address: "0x63971484590b054b6Abc4FEe9F31BC6F68CfeC04", fromBlock: 5991116n },
  // },
  // [customChains.basecamp.id]: {
  //   Morpho: { address: "0xc7CAd9B1377Eb8103397Cb07Cb5c4f03eb2eBEa8", fromBlock: 4804080n },
  // },
  // [customChains.hyperevm.id]: {
  //   Morpho: { address: "0x68e37dE8d93d3496ae143F2E900490f6280C57cD", fromBlock: 1988429n },
  // },
};

export const CORE_DEPLOYMENTS = new Set<keyof Deployments>([mainnet.id, base.id]);

export function getContractDeploymentInfo(
  chainId: number | undefined,
  name: MorphoContractName,
): DeploymentDetails | undefined {
  return chainId !== undefined ? DEPLOYMENTS[chainId][name] : undefined;
}
