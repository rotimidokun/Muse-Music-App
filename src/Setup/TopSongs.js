import './TopAlbum.css';
import ScrollToTop from './ScrollToTop';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import BackToHomeIcon from '@material-ui/icons/ArrowBackIosRounded';
import PlayArrow from '@material-ui/icons/PlayArrowRounded';
import SearchIcon from '@material-ui/icons/SearchRounded';
import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');


function TopSong() {
    const [topSong, setTopSong] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch('https://itunes.apple.com/us/rss/topsongs/limit=100/json')
            .then((res) => res.json())
            .then((res) => {
                let data = res.feed.entry
                console.log(data)
                setTopSong(data);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="container">
            <div className="songHeader">
                <div className="backBtnCont">
                    <Link to="/" className="backToHomeText">
                        <BackToHomeIcon className="backIcon"> </BackToHomeIcon>
                        Home</Link>
                </div>

                <div className="searchCont">
                    <input placeholder="Search Songs" type="text" className="searchSong" onChange={(event) => { setSearchTerm(event.target.value) }}>
                    </input>
                    <SearchIcon className="searchIcon" />
                </div>

                <p className="topSongText">Top 100 Songs</p>
            </div>
            <ScrollToTop />

            {topSong.filter((item) => {
                if (searchTerm == "") {
                    return item;
                } else if (item.title.label.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item;
                }
            }).map((item) => {
                const id = item.id.attributes['im:id']
                const label = item.id.label
                const songTitle = item.title.label
                const image = item["im:image"][2].label
                const artistName = item["im:artist"].label
                const linkToSong = item.link[0].attributes.href
                const category = item.category.attributes.label


                return (
                    <div className="body">
                        <Fade bottom>
                            <div className="songContainer">
                                <p key={id}> </p>
                                <div>
                                    <img src={image} alt="Song Image" className="image" height="120px" />
                                </div>

                                <div className="songInfo">
                                    <div className="songTitle"> {songTitle} </div>
                                    <div className="artistName"> {artistName} </div>
                                    <div className="category"> {category} </div>
                                    <div className="linkToSong"> <a href={linkToSong} target="blank"> Play </a> <PlayArrow className="playArrow"> <a href={linkToSong}></a></PlayArrow> </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                )
            })}
        </div>
    )
}

export default TopSong;