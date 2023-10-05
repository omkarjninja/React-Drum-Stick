import "./instrument.css"
function Instrument(props){
    const music =()=>{
        const mus=new Audio(props.music);
        mus.play()
    }
 const kb=(event)=>{
    if(event.key===props.text){
       const mukr=props.music;
        const suk=new Audio(mukr);
        suk.play();
    }
 }
    return(
        <div>
            <button className={props.class} onClick={music} onKeyDown={kb}>{props.text}</button>
        </div>
    )
}
export default Instrument;