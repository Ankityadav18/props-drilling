import D from "../Component/D";
import E from "../Component/E";


function C({myname}){
    return (
        <div  style={{background:"lightblue"}}>
               <p>ComponentC</p>
            <D myname={myname}></D>
            <E myname={myname}></E>
        </div>
    )


}
export default C;