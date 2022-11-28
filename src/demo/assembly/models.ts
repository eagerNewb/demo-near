import { u128,ContractPromiseBatch, Context, logging } from "near-sdk-as"
import { AccountId, ONE_NEAR, Timestamp } from '../../utils';

@nearBindgen
export class Player {
    public id: AccountId;
    public contribution: u128;
    private reward: String;

    constructor() {
      this.id = Context.sender;
      this.contribution = Context.attachedDeposit;
      this.reward = "Reawrd";
    }
   
}

export enum States {
    ACTIVE,
    SUCCESS,
    FAIL,
};

@nearBindgen
export class Room {
      public creator: AccountId;
      private players: Map<AccountId, Player>;
      private fee: u128;
      private vault: u128;
      private payed: bool;
      private locked: bool;
      public state: States;
      private description: String;
      private name: String;
      private lifetime: u128;

      constructor(fee: u128, description: String, name: String, lifetime: u128) {
        this.creator = Context.sender;
        this.players = new Map<AccountId, Player>();
        this.fee = u128.mul(u128.from(fee),ONE_NEAR);
        this.payed = false;
        this.locked = false;
        this.state = States.ACTIVE;
        this.description = description;
        this.name =  name;       
        this.lifetime = lifetime; 
      }

      public join(): void {
        assert(this.state == States.ACTIVE, `Room has reached it's fee of ${this.vault} and is ${this.state}!`);

        let player = new Player();
        logging.log(player.contribution);

        assert(this.fee < player.contribution, `Your contribution of ${player.contribution} is smaller than the Room fee: ${this.fee}!`)
        this.vault = u128.add(this.vault, player.contribution);
        this.players.set(player.id, player);
      }
      public isLocked(): bool {
          return this.locked;
      }

      public isPayed(): bool {
          return this.payed;
      }
}

