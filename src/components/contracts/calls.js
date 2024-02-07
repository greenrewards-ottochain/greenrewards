import { ethers } from "ethers";
import abi from "../../contract/greenRewardABI.json";


const contractAddr = "0x34eC3FEd30D5457394c40da0488aF0d45fB9059d";

const getContract = async () => {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum); // A connection to the Ethereum network
    var signer = await provider.getSigner(); // Holds your private key and can sign things
    const Contract = new ethers.Contract(contractAddr, abi, signer);
    console.log(Contract)
    return Contract;
  } else {
    alert("No wallet detected");
  }
};

export async function addProfile(name, location, mail) {
    const greenContract = await getContract();
    try {
        var tx = await greenContract.createProfile(
            name,
            location,
            mail
          );
          await tx.wait();
          console.log(tx.hash)
    } catch (error) {
        console.log(error);
    }
  }

export async function getSeller(owner) {
    const greenContract = await getContract();
    try {
        var seller = await greenContract.getSeller(owner);
        return seller;
      } catch (error) {
        console.log(error);
      }
}

export async function sellProduct(name, image, description, price, weight) {
    const greenContract = await getContract();
    try {
        var tx = await greenContract.listProduct(name, image, description, price, weight);
        await tx.wait();
      } catch (error) {
        console.log(error);
      }
}

export async function getProducts() {
    const greenContract = await getContract();
    try {
        var products = await greenContract.getAllproduct();
        const structuredProducts = products.map((product) => ({
            owner: product.owner,
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,
            location: product.location,
            totalWeight: product.totalWeight,
            sold: product.sold,
            progress: product.inProgress
        }));

        return structuredProducts;
      } catch (error) {
        console.log(error);
      }
}


export async function getSellers() {
    const greenContract = await getContract();
    try {
        var sellers = await greenContract.getallSeller();
        const structuredSellers = sellers.map((seller) => ({
            id: seller.sellerId,
            address: seller.sellerAddress,
            name: seller.name,
            location: seller.location,
            mail: seller.mail,
            payout: seller.totalPayout,
            totalWeight: seller.recycledWeight,
            recycled: seller.recycled
        }));

        return structuredSellers;
      } catch (error) {
        console.log(error);
      }
}