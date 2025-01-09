
import F from "../Component/F"
function D({myname}){
return(
    <div  style={{background:"violet"}}>
           <p>ComponentD{myname}</p>
        <F myname={myname}></F>
    </div>
)
}
export default D;