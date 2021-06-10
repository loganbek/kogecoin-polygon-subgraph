// import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
// import { Transaction, Token, TokenBalance } from '../generated/schema'

import {Approval, OwnershipTransferred, Transfer, balanceOf} from '../generated/Koge/Koge'

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

export function handleApproval(event:Approval):void {
  
}

export function handleOwnershipTransferred(event:OwnershipTransferred):void {

}

export function handleTransfer(event:Transfer):void {

}

// export function handleBalanceOf(call:balanceOf):void {
//     console.log(call.address)
// }