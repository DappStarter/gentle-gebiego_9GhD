require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan recipe night essay grace derive slot gesture'; 
let testAccounts = [
"0x482438e5806e2cf7c81798f03f9c520fe77ce5a0a0e637b86fa89a339814565c",
"0x3e3b5e78b42fba5fd7201fac1c86b941e6079dd923b8cb6f3d31cae124680ed3",
"0x244b8551b3bf016cdc106bc7e7404a9edc46e57080d45455b80e530b0a90d87c",
"0xed6f24c4442e44dbd6fd731d32e3251be658b226a577594ed0fd9bd96c8b6eca",
"0x7578994dbf962b428be49cb3c039ea91660cfcc74ba103ea4f02109af0e2edd9",
"0x6824ddb8808518a64b2eb6ddd93221467c98c849a352503ebe8d9b983c62edc0",
"0x9c1a25194f139d08c85b1e617a87c8f74f229d1cf67a9ccdb46a2d8252c95dfd",
"0x9bbf7e61132148ca0d0d22b0ac50b3fbe10a2e33bb73da9fa1b2c2f1f839b51f",
"0xbf36b84ee813dfd7d5e6ed7482d1984ec28ac237bcd1cc166cbe71df57765768",
"0xc55260eb8b1527efbe8ab12b5361790a7edde3f5d1d7df4f8c9509fb1c1d64e4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

