## CREATORS

EXAMPLE ``` initRoom ``` - create a camapaign
```sh
near call dev-1643474469513-99630285886186 initRoom '{"fee": "3","description":"My first Room on NEAR!", "name":"Join me!", "lifetime":"30"}' --accountId example.testnet
```
##
##
## CONTRIBUTORS

EXAMPLE ``` getRooms ```- list of Rooms

```sh
near call dev-1643474469513-99630285886186 getRooms --accountId example.testnet
```

``` backRoom ``` - Contribute to a campaign.

```sh
 near call dev-1643474469513-99630285886186 joinRoom '{"cid": "example.testnet"}' --accountId mytest.testnet --deposit 1
```

