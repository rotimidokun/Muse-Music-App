import './TopAlbum.css';
import ScrollToTop from './ScrollToTop';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import BackToHomeIcon from '@material-ui/icons/ArrowBackIosRounded';
import PlayArrow from '@material-ui/icons/PlayArrowRounded';
import SearchIcon from '@material-ui/icons/SearchRounded';
import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');


function TopAlbum() {
    const [topAlbum, setTopAlbum] = useState([])
    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then((res) => res.json())
            .then((res) => {
                let data = res.feed.entry
                console.log(data)
                setTopAlbum(data);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="container">
            <div className="albumHeader">
                <div className="backBtnCont">
                    <Link to="/" className="backToHomeText">
                    
                            <BackToHomeIcon className="backIcon"> </BackToHomeIcon>
                    
                        Home</Link>
                </div>

                <div className="searchCont">
                    <input placeholder="Search Albums" type="text" className="searchAlbum" onChange={(event) => { setSearchTerm(event.target.value) }}>
                    </input>
                    <SearchIcon className="searchIcon" />
                </div>

                
                <p className="topAlbumText">Top 100 Albums</p>
            </div>
            <ScrollToTop />

            {topAlbum.filter((item) => {
                if (searchTerm == "") {
                    return item;
                } else if (item.title.label.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item;
                }
            }).map((item) => {

                const id = item.id.attributes['im:id']
                const label = item.id.label
                const albumTitle = item.title.label
                const image = item["im:image"][2].label
                const artistName = item["im:artist"].label
                const releaseYear = item["im:releaseDate"].attributes.label
                const linkToAlbum = item.link.attributes.href

                return (
                    <div className="body">
                        <Fade bottom>
                            <div className="albumContainer">
                                <p key={id}> </p>
                                <div>
                                    <img src={image} alt="Album Image" className="image" height="120px" />
                                </div>
                                
                                <div className="albumInfo">
                                    <div className="albumTitle"> {albumTitle} </div>
                                    <div className="artistName"> {artistName} </div>
                                    <div className="releaseYear"> {releaseYear} </div>
                                    <div className="linkToAlbum"> <a href={linkToAlbum} target="blank"> Play </a> <PlayArrow className="playArrow"> <a href={linkToAlbum}></a></PlayArrow> </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                )
            })}
        </div>
    )
}

export default TopAlbum;