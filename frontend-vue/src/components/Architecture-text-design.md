User goes on dApp -> login/signin -> mint nft/receive nft -> access VIP for Henkel/Store NFT shoes in Virual Adidas Closet

more digital studios
    
    - more-core-proto - NextJs - abstraction of core app logic - Repository
      >  interface: wallet > abstraction for a wallet
      >  interface: nft-contract > abstraction of our NFT contract
      >  interface: currency-convert > handles conversion to/from stable coins and to/from different networks
      >  interface: network-connect > handles connecting to different networks on the blockchain - near, ethereum, chromia, etc...
      
    near-layer-backend-dapp - AssemblyScript/Rust ( on the NEAR blockchain ) - Repository
      >  concrete impl: wallet
      >  concrete impl: nft-contract
      >  concrete impl: currency-convert
      >  concrete impl: network-connect
    
    * What a implementing a second solution for a different layer would look like:
    chromia-layer-backend-dapp - Rell ( on the CHROMIA blockchain ) - Repository
      >  concrete impl: wallet
      >  concrete impl: nft-contract
      >  concrete impl: currency-convert
      >  concrete impl: network-connect

    frontend-consumer - React App - Henkel VIP - Repository
      > interacts with the smart NFT contract deployed on the NEAR network (near-layer-backend-dapp) via jsonRPC (provided by NEAR)
      > This is where a potential App "Henkel VIP" can live.
      > Logic for creating VIP rooms for Henkel customer's using their NFT's.
    
    * What implementing a second solution for a different client using our dApp core can be
    frontend-consumer - React App - Adidas Virual Shoe Closet - Repository
      > interacts with the smart NFT contract deployed on the chromia network (chromia-layer-backend-dapp) jsonRPC on chromia?
      > This is where a potential App "Adidas Virtual Shoe Closet" can live.
      > Logic for creating Virtual Shoe Closet for Adidas customer's using their NFT's.

    