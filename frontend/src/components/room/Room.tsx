// import { button } from './components/shared/button';
import './Room.css';
import  ProgressBar from '../shared/progress';
import { useLocation } from 'react-router-dom';

type RoomProps = {
    // title: string;
    // description: string;
    // fee: Number;
    // creator: String;
    // players: [];
    data: {}
};
const ONE_NEAR = 1000000000000000000000000;

export const Room = ({data}: RoomProps): any => {
console.log("Rooms",data);
return ( 
<div className="room-wrapper"> { data && Object.keys(data).map((k: any)  => {
      const d = data[k as keyof typeof data];       
      const  {key, title, description, fee, creator, players} = {
        key:{k},
        title: d["name"],
        description: d["description"],
        fee: d["fee"]/ONE_NEAR,
        creator: d["creator"],
        players: d["players"]
      };
      let completed = 0;
      const objB = Object.keys(players);
      objB.map((k: any, v: any) => {
          const contrib = players[k]["contribution"] / ONE_NEAR;
          completed = Math.round((contrib / fee) * 100);
      });
      return ( <div key={k} className="room-box">
                <div className="bg-wrapper"> 
            
            <h3>{title}</h3>
            <div key={'d-' + k} className="room-texts">
                <div className="creator">
                  <p>Creator</p>
                  <span>{creator}</span>
                </div>
                <div className="fee">
                  <p className="fee">Fee</p>
                  <span>{fee}</span>
                </div>
                <div className="description">
                  <h5>{description}</h5>
                </div>
                <div className="room-players"> {objB.length} </div>
                <ProgressBar 
                  bgcolor={"#F2C2C7"}
                  completed={completed}
                 />
            </div>
            </div>
        </div>
       );
    })
    }</div>);
    
};