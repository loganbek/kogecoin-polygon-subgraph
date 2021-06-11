// import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
// import { Transaction, Token, TokenBalance } from '../generated/schema'

import {Approval, OwnershipTransferred, balanceOf} from '../generated/Koge/Koge'
import { Transfer as TransferEvent } from '../generated/Koge/Koge'
// import { Transfer } from '../generated/schema'
export function handleApproval(event:Approval):void {
  
}

export function handleOwnershipTransferred(event:OwnershipTransferred):void {

}

//Handles new and already existing Transfer entities
export function handleTransfer(event: TransferEvent): void {

    
    // Create a Transfer entity, using the hexadecimal string representation
    // of the transaction hash as the entity ID
    let id = event.transaction.hash.toHex()
    let transfer = new Transfer(id)
  
    // Set properties on the entity, using the event parameters
    transfer.from = event.params.from
    transfer.to = event.params.to
    transfer.amount = event.params.amount
  
    // Save the entity to the store
    transfer.save()
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