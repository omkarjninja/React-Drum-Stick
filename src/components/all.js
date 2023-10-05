import "./all.css"
import Instrument from "./instrument";
import w from "../assets/sounds/tom-1.mp3";import a from "../assets/sounds/tom-2.mp3";
import s from "../assets/sounds/tom-3.mp3";import d from "../assets/sounds/tom-4.mp3";
import j from "../assets/sounds/crash.mp3";import k from "../assets/sounds/kick-bass.mp3";
import l from "../assets/sounds/snare.mp3";
function Set(){
    return(
        <div className="set">
            <Instrument class={"drum w"} text={"w"} music={w}></Instrument>
            <Instrument class={"drum a"} text={"a"} music={a}></Instrument>
            <Instrument class={"drum s"} text={"s"} music={s}></Instrument>
            <Instrument class={"drum d"} text={"d"} music={d}></Instrument>
            <Instrument class={"drum j"} text={"j"} music={j}></Instrument>
            <Instrument class={"drum k"} text={"k"} music={k}></Instrument>
            <Instrument class={"drum l"} text={"l"} music={l}></Instrument>
         </div>
    )
}
export default Set;