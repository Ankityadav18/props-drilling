
import C from "../Component/C"
function B({myname}){
    return(
        <div  style={{background:"red"}}>
            <p>ComponetB</p>
            <C myname={myname}></C>
        </div>
    )

}
export default B;