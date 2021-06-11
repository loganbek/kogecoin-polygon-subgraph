const Koge = artifacts.require('./Koge.sol')

module.exports = async function(deployer) {
  await deployer.deploy(Koge)
}
