import { storage } from "near-sdk-core"
import { u128, logging, PersistentSet, Context, ContractPromiseBatch } from 'near-sdk-as';

import { AccountId, ONE_NEAR, MIN_ACCOUNT_BALANCE, asNEAR } from '../../utils';
import { Room } from './models';

export const ownerIds = new PersistentSet<AccountId>("ci");


export function initRoom(fee: u128, description: String, name: String, lifetime: u128): AccountId {  
  const c = createOrEdit(fee, description, name, u128.from(lifetime));
  return c.creator;
  
}

/*
  joinRoom()
  Args
  - cid: The room you want to back.
*/
export function joinRoom(cid: AccountId): void {
  const c = getRoom(cid);
  c.join();
  storage.set(c.creator, c);
}

/*
  Logs Rooms.
*/
export function getRooms(): Map<String, Room> {
  const ids = ownerIds.values();
  const ret = new Map<String, Room>();

  if(ids.length > 0) {
    for (let i = 0; i < ids.length; i++) {
      ret.set(i.toString(), getRoom(ids[i]));
    }
  }
  logging.log(ret);
  return ret;
}

/*
  Decides wether to return Room in storage || overwrite with new Room 
  Based on locked and payed Room params.
*/
function createOrEdit(fee: u128, description: String, name: String, lifetime: u128): Room {
  let r = new Room(fee, description, name, lifetime);
  
  if (storage.hasKey(Context.sender)) {
    let r: Room = getRoom(Context.sender);
    // assert(!c.isLocked(), "Room is Locked!");
    // if(!c.isPayed()) {
    //   return c;
    // }
  }
  
  
  if(!ownerIds.has(r.creator)) {
    ownerIds.add(r.creator);
  }
  storage.set(Context.sender, r);

  return r;
}

/*
  Returns a Room based on its id.
*/
export function getRoom(cid: AccountId): Room {
  // storage.delete(cid);
  return storage.getSome<Room>(cid);
}

/*
  Gather scattered testing funds.
  Place your accountId in ContractPromiseBatch.create();
*/
export function returnBalance(): u128 {
  assert(getRoom(Context.sender), "You can not withdraw funds. No Rooms in your name!");
  const payout = u128.sub(u128.from(Context.accountBalance), u128.mul(u128.from(3),ONE_NEAR));

  // E.g ContractPromiseBatch.create("test.testnet");
  ContractPromiseBatch.create(Context.sender).transfer(payout);

  return payout;
}
