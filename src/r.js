import { AppState } from "./provider/provider"

export function Rag(){
    const {mobile}=AppState();
    return(
        <div>hi
      { mobile.map((n)=>{
        <div>
            <p>{n.id}</p>
            <p>{n.mobileName}</p>
            <p>{n.image}</p>
            <p>{n.model}</p>
            <p>{n.price}</p>
        </div>
      })}
      </div>
    )
}