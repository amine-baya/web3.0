require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/nwVm-KnjadxSUi-yPbFjMxj8cMII-ylV',
      accounts: ['bdb86deb73a7a9402324c7fb2cb984dcba487206634c4d9d47457d563ad430a1'],
    },
  },
};
