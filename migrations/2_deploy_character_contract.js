const DungeonsAndDragonsCharacter = artifacts.require(
  "DungeonsAndDragonsCharacter"
);

const RINKEBY_VRF_COORDINATOR = "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B";
const RINKEBY_LINKTOKEN = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const RINKEBY_KEYHASH =
  "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311";

module.exports = async (deployer, network, [defaultAccount]) => {
  await deployer.deploy(
    DungeonsAndDragonsCharacter,
    RINKEBY_VRF_COORDINATOR,
    RINKEBY_LINKTOKEN,
    RINKEBY_KEYHASH
  );
  let dnd = await DungeonsAndDragonsCharacter.deployed();
};
