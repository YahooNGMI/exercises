// 4. Let's monitor Ethereum activity in real time!
//    a) Sign up for a free Infura account.
//    b) Using the `ethers` npm library, display the following information:

//    - Current block number
//    - Current gas price
//    - Current chain id

//    c) Using the `prompt-promise` npm library, prompt a user to provide an ethereum address, and then: - Display the Ethereum balance of that account to the user in the terminal. If it is not a valid ethereum address, display an error. The balance should be converted from `wei` to `ether`. - Display the transaction count of that account to the user in the terminal.

const ethers = require('ethers');

const prompt = require('prompt-promise');



async function displayInfo() {
    // Connect to the Ethereum network
    const provider = new ethers.providers.InfuraProvider('mainnet', 'b5f32cd516e94d3395a90e5ed9c59400');

    // Get the current block number
    const blockNumber = await provider.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);

    // Get the current gas price
    const gasPrice = await provider.getGasPrice();
    console.log(`Current gas price: ${gasPrice.toString()} wei`);

    // Get the current chain id
    const { chainId } = await provider.getNetwork();
    console.log(`Current chain id: ${chainId}`);
    // Prompt the user for an Ethereum address
    const address = await prompt('Enter an Ethereum address: ');

    // Check if the address is valid
    if (!ethers.utils.isAddress(address)) {
        console.error('Invalid Ethereum address');
        return;
    }

    // Connect to the Ethereum network
    // const provider = new ethers.providers.InfuraProvider('mainnet', 'b5f32cd516e94d3395a90e5ed9c59400');
    // Get the balance of the account
    const balance = await provider.getBalance(address);
    console.log(`Balance: ${ethers.utils.formatEther(balance)} ether`);

    // Get the transaction count of the account
    const transactionCount = await provider.getTransactionCount(address);
    console.log(`Transaction count: ${transactionCount}`);
}

displayInfo();





