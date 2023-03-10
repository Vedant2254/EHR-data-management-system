const { ethers, deployments, getNamedAccounts } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const [_, doctor, patient] = await ethers.getSigners();

  // await deployments.fixture(["all"]);
  const contract = await ethers.getContract("Contract", doctor);

  // console.log(await contract.getPatGeneralHash(patient.address));
  // console.log(await contract.getPatRecordHash(patient.address));

  console.log(await contract.getDrHash(doctor.address));
}

main().catch((e) => {
  console.log(e);
});
