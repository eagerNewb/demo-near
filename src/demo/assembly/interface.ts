interface NonFungibleToken {
    // owner of Nft
    ownerId: string;

    // keeps track of the owner for any given token ID - see ts index signatures.
    ownerById: {[tokenId: string]: {AccountId:string}};
}

interface Contract {
    tokens: NonFungibleToken;
    metadata: {};
}






