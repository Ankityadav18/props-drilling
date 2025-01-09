
import A from "../Component/A"
function Parent({myname}){
    return (
        <div  style={{background:"orange"}}>
            <p>ComponentParent</p>
            <A myname={myname}></A>
        </div>
    )

}
export default Parent;