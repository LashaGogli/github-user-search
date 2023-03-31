import "./Container.css"
import moon from "../photos/moon.svg"
import sun from "../photos/sun.svg"
import search from "../photos/search.svg"
import pin from "../photos/pin.png"
import blog from "../photos/blog.svg"
import twitter from "../photos/twitter.png"
import building from "../photos/building.svg"
import whitepin from "../photos/whitepin.png"
import whiteblog from "../photos/whiteblog.png"
import whitetwitter from "../photos/whitetwitter.png"
import whitebuilding from "../photos/whitebuilding.png"
import { useState } from 'react';



export default function Container(props) {


    const [dark, setDark] = useState("#F6F8FF");
    const [lightdark, setLightdark] = useState("white");
    const [text, setText] = useState("#222731");
    const [display, setDisplay] = useState("none");
    const [display2, setDisplay2] = useState("flex");

    const [searchValue, setSearchValue] = useState("");

    function handleSearchInputChange(e) {
        setSearchValue(e.target.value);
       
    }
    function handleClick2() {

        props.onSearch(searchValue);
    }

    function handleClick() {

        if (dark === "#141D2F") {
            setDark("#F6F8FF");
            setText("#222731");
            setDisplay("none");
            setDisplay2("flex");
            setLightdark("white");
        } else {
            setDark("#141D2F");
            setText("#FFFFFF");
            setDisplay("flex");
            setDisplay2("none");
            setLightdark("#1E2A47");
        }
    }
    
    return <div className="container" style={{ background: dark }}>
        <div className="middleContainer">
            <div className="firstDiv">
                <p className="devfinder" style={{ color: text }}>devfinder</p>
                <div className="darkModeDiv" onClick={handleClick} style={{ display: display2 }}>
                    <p className="dark">DARK</p>
                    <img src={moon} alt="moon" />
                </div>
                <div className="darkModeDiv" onClick={handleClick} style={{ display: display }}>
                    <p className="light">LIGHT</p>
                    <img src={sun} alt="sun" />
                </div>
            </div>
            <div className="secondDiv" style={{ background: lightdark }}>
                <div className="searchDiv" style={{ background: lightdark }}><img src={search} alt="search" /></div>
                <input type={search} placeholder={"Search GitHub username…"} className="input" style={{ background: lightdark, color: text }} onChange={handleSearchInputChange}></input>
                {props.error && <p className="noresult"> No results</p>}
                <button className="button" onClick={handleClick2} >Search</button>

            </div>
            <div className="thirdDiv" style={{ background: lightdark }}>

                <div className="avatarDiv">
                    <div className="roundDiv">
                        <img src={props.avatar} alt="avatar" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="infoDiv">
                    <div className="gareDiv">
                        <div className="titleDiv">
                            <p className="titleP" style={{ color: text }}>{props.username}</p>

                            <div className="dateDiv">
                                <span className="dateSpan" style={{ color: text }}>Joined {new Date(props.date).getUTCDate()}</span>
                                <span className="dateSpan" style={{ color: text }}>{new Date(props.date).toLocaleString('default', { month: 'short' })} </span>
                                <span className="dateSpan" style={{ color: text }}>{new Date(props.date).getUTCFullYear()}</span>

                            </div>
                        </div>
                        <p className="userDiv">@{props.user}</p>
                    </div>

                    <p className="bioP" style={{ color: text }}>{props.bio ? props.bio : 'This profile has no bio.'}</p>

                    <div className="followersDiv" style={{ background: dark }}>
                        <div className="smallDivs">
                            <span className="repos" style={{ color: text }}>Repos</span>
                            <span className="counterspan" style={{ color: text }}>{props.repos}</span>
                        </div>
                        <div className="smallDivs">
                            <span className="repos" style={{ color: text }}>Followers</span>
                            <span className="counterspan" style={{ color: text }}>{props.followers}</span>
                        </div>
                        <div className="smallDivs">
                            <span className="repos" style={{ color: text }}>Following</span>
                            <span className="counterspan" style={{ color: text }}>{props.following}</span>
                        </div>
                    </div>
                    <div className="downDiv">
                        <div className="blogDiv">
                            <img src={pin} alt="pin" style={{ display: display2 }} />
                            <img src={whitepin} alt="whitepin" style={{ display: display }} />
                            <p className="blogP" style={{ color: text }}>{props.pin ? props.pin : 'Not available'}</p>
                        </div>
                        <div className="blogDiv">
                            <img src={twitter} alt="twitter" style={{ display: display2 }} />
                            <img src={whitetwitter} alt="whitetwitter" style={{ display: display }} />
                            <p className="blogP" style={{ color: text }}>{props.twitter ? props.twitter : 'Not available'}</p>
                        </div>
                        <div className="blogDiv">
                            <img src={blog} alt="blog" style={{ display: display2 }} />
                            <img src={whiteblog} alt="whiteblog" style={{ display: display }} />
                            <p className="blogP" style={{ color: text }}>{props.blog ? props.blog : 'Not available'}</p>
                        </div>
                        <div className="blogDiv">
                            <img src={building} alt="building" style={{ display: display2 }} />
                            <img src={whitebuilding} alt="whitebuilding" style={{ display: display }} />
                            <p className="blogP" style={{ color: text }}>{props.building ? props.building : 'Not available'}</p>

                        </div>

                    </div>
                </div>






            </div>

        </div>



    </div>
}