
import React,{useContext} from "react";
import {Propcontext,Studcontext} from "../App"

function F({myname}){

    let pdata=useContext(Propcontext)
    let sdata=useContext(Studcontext)
    return(
        <div style={{background:"skyblue"}}>{pdata}{sdata}</div>
    )

}
export default F;