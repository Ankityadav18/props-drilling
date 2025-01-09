
import B from "../Component/B"
function A({myname}){
    return(
    <div  style={{background:"pink"}}>
        <p>ComponentA</p>
            <B myname={myname}></B>
            
            
        </div>
    )

}
export default A;