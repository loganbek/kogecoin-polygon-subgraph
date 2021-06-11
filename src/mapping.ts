// class Event {
//     address: Address
//     logIndex: BigInt
//     transactionLogIndex: BigInt
//     logType: string | null
//     block: Block
//     transaction: Transaction
//     parameters: Array<EventParam>
//   }

//   class Block {
//     hash: Bytes
//     parentHash: Bytes
//     unclesHash: Bytes
//     author: Address
//     stateRoot: Bytes
//     transactionsRoot: Bytes
//     receiptsRoot: Bytes
//     number: BigInt
//     gasUsed: BigInt
//     gasLimit: BigInt
//     timestamp: BigInt
//     difficulty: BigInt
//     totalDifficulty: BigInt
//     size: BigInt | null
//   }

//   class Transaction {
//     hash: Bytes
//     index: BigInt
//     from: Address
//     to: Address | null
//     value: BigInt
//     gasUsed: BigInt
//     gasPrice: BigInt
//     input: Bytes
//   }


// import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
// import { Transaction, Token, TokenBalance } from '../generated/schema'

import { Approval, OwnershipTransferred, TransferFrom } from '../generated/Koge/Koge'
import { Transfer as TransferEvent } from '../generated/Koge/Koge'
import { ERC20Contract } from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'
import { Address, BigInt, ethereum, store } from "@graphprotocol/graph-ts";
import { Transfer } from '../generated/schema'

// let tupleArray: Array<ethereum.Value> = [
//     ethereum.Value.fromAddress(Address.fromString("0x0000000000000000000000000000000000000420")),
//     ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(62))
//   ];

//   let tuple = tupleArray as ethereum.Tuple;

//   let encoded = ethereum.encode(ethereum.Value.fromTuple(tuple))!;

//   let decoded = ethereum.decode("(address,uint256)", encoded);



export function handleApproval(event: Approval): void {

}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {

}

//Handles new and already existing Transfer entities
export function handleTransfer(event: TransferEvent): void {

    log.debug('DataSource Values (address), (network), (context): { }, { }, { } ', [event.dataSource.address(),
    event.dataSource.network(),
    event.dataSource.context()])


    log.debug('Block number: {}, block hash: {}, transaction hash: {}', [
        event.block.number.toString(), // "47596000"
        event.block.hash.toHexString(), // "0x..."
        event.transaction.hash.toHexString(), // "0x..."
    ])

    let erc20Symbol = ERC20Contract.bind(event.from).symbol()
    log.info('ERC20Symbol = {}', [erc20Symbol])
    // Create a Transfer entity, using the hexadecimal string representation
    // of the transaction hash as the entity ID
    let id = event.transaction.hash.toHex()
    let transfer = new Transfer(id)
    transfer.from = event.params.from
    transfer.to = event.params.to
    transfer.amount = event.params.amount

    log.info('Tranfer values - {}, {}, {}, {}', [id, transfer.from, transfer.to, transfer.amount])

    transfer.save()
}

export function handleTransferFrom(call: TransferFrom): void {

}

// export function handleBalanceOf(call:balanceOf):void {
//     console.log(call.address)
// }

// export function handleNewGravatar(event: NewGravatar): void {
//   let gravatar = new Gravatar(event.params.id.toHex())
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }

// export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//   let id = event.params.id.toHex()
//   let gravatar = Gravatar.load(id)
//   if (gravatar == null) {
//     gravatar = new Gravatar(id)
//   }
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }