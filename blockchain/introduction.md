### Course info

about teacher

![teacherInfo.png](https://pic.rmb.bdstatic.com/bjh/048d0f8b36a4dd34d8e5f315f106a09c.png)

[Github repository](https://github.com/smartcontractkit/full-blockchain-solidity-course-js)



#### What is Bitcoin

Bitcoin is **Superior Degital Store Of Value** like Gold,whichi is limited amount .Bitcoin is the first protocol to use the revolutionary technology called blockchain.[bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf)

#### what is EthereumEthereum 

Ethereum is a decentralized, open-source blockchain with **smart contract** functionality. Ether (ETH or Ξ) is the native cryptocurrency of the platform. Among cryptocurrencies, Ether is second only to Bitcoin in market capitalization.Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact.

#### What is smart contract

smart contract are a set of instructions executed in a decentralized way without the need for a centralized or third party intermediary.

#### blockchian oracle

Any device that interacts with the offchain world to provide data or computations to smart contract.

#### Hybrid smart contracts 

Hybrid smart contracts combine code running on the blockchain (on-chain) with data and computation from outside the blockchain (off-chain) provided by Decentralized Oracle Networks.The highest value is **Trust Minimized Agreements**

- immutable
- automatically executes
- transparent


#### Transaction Fee

when we make transactions , the "miners" or "validators" make a small fee .This payment incentivize people to run nodes.

#### Gas Price

Gas is a unit of omputational measurement . The transaction fee is calculated according to the gas . The more complex your transaction is , the more gas you have to pay.

 > Transaction fee = Gas price * Gas useage 

 [![1.png](https://pic.rmb.bdstatic.com/bjh/0d4c132167d4250d2ba9edca5b1f8a44.png)](https://pic.rmb.bdstatic.com/bjh/0d4c132167d4250d2ba9edca5b1f8a44.png)


## How do blockchains work ?


[blockchain demo](https://andersbrownworth.com/blockchain/blockchain)



[![block.png](https://pic.rmb.bdstatic.com/bjh/84bc7d0a8279eabaadfbb8c63ee267e2.png)](https://pic.rmb.bdstatic.com/bjh/84bc7d0a8279eabaadfbb8c63ee267e2.png)

The above pic is  the illustration of the blockchain block . When the data changes , the hash changes .

[![blockchain.jpeg](https://pic.rmb.bdstatic.com/bjh/5e7ab2fee9ff107045752726d01d573e.jpeg)](https://pic.rmb.bdstatic.com/bjh/5e7ab2fee9ff107045752726d01d573e.jpeg)

The hash of the previous block is the same as the pre of the next block , Whenever the data of the block changes , the hash of the block changed and the blocks will not be in order , the previous block's hash tag will not be the same as the next block's pre .

**Distributed blockchain**

[![distributedBlockChain.png](https://pic.rmb.bdstatic.com/bjh/c306dd967b7a9b1eced191b26873475f.png)](https://pic.rmb.bdstatic.com/bjh/c306dd967b7a9b1eced191b26873475f.png)


The peer A is the same as the peer B and the same as peer B . When one is changed , according to other chains, we can easily know which one is incorrect .

#### Mining

Mining is the process of finding the "solution" to the blockchain "problem".



## Signing Transactions

[demo site](https://andersbrownworth.com/blockchain/public-private-keys/keys)


#### Private Key:

Only known to the key holder, it's used to "sign" transactions.

#### Public key

with the private key and an algorithm called "Elliptic Curve Digital Signature Algorithm"  , we can get a public key .Public key ,the whole world can get access .

Signing 

Message+ private key = Message Signature

Verifying

Message + Public Key = Message Signature

While transaction , it is the same . 

Transaction + private key = Message Signature

Transaction + Public Key = Message Signature


> Signing a transaction is  a "one way" process. Someone with a private
key signs a transaction by their private key
being hashed with their transaction data.
Anyone can then verify this new transaction
hash with your public key.

#### GAS

Sending transactions gets more expensive the more people use the chain.

[![unit.png](https://pic.rmb.bdstatic.com/bjh/8e6b49b1d95afd343724dbd01ec08b51.png)](https://pic.rmb.bdstatic.com/bjh/8e6b49b1d95afd343724dbd01ec08b51.png)



### Consensus

> Consensus is the mechanism used
to agree on the state of a blockchain


1. Chain Selection
2. Sybil Resistance



- Pow

- Pos



ETH and BTC are Proof Of Work,(at the time of recording),ETH2.0 will be proof of stake .POW & PoS are sybil resistance mechanisms,the bigger the blockchain , the more secure . Consensus is how blockchains decide
what the state of the chain is, Sharding and rollups are
scalability solutions , Only so many transactions can fit
into a block.Gas prices are how much it costs to
perform executions on-chain.




