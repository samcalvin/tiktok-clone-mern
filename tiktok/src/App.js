import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(Videos);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        {Videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}

        {/* // we can comment out / delete the hard coded videos below: 
        <Video
          url="https://v16-web-newkey.tiktokcdn.com/99a1f2e5419be4769afca89a470d7c1f/5f91069f/video/tos/alisg/tos-alisg-pve-0037c001/0459c188936241d581751ecf13c4f467/?a=1988&br=3944&bt=1972&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201021221203010189194068220010BC&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am1qaGR1am03dzMzZjczM0ApZGk0OmU6Mzs5N2g3ZTg7NGcta3NmY2k0YGtfLS1iMTRzczIzXmItNGFiNi80MTEzMzQ6Yw%3D%3D&vl=&vr="
          channel="samcalvin.me"
          description="YOOO this works!"
          song="I can do all things REACT"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url="https://v16-web-newkey.tiktokcdn.com/05f3cd0ce6d85b1d3773f2a09e9987fb/5f910802/video/tos/useast2a/tos-useast2a-ve-0068c002/bf248e4bb751477f9744614ddb9c9c01/?a=1988&br=2474&bt=1237&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020102122172001019018602955002F3B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amlrNDVuOzdxdzMzNDczM0ApZjpoZTlpOWQ1N2U1Ozs1NGcuZl9wX2BrYTVfLS1fMTZzczIvXjQ2LWM1XzAzNS0tMjM6Yw%3D%3D&vl=&vr="
          channel="samcalvin.me"
          description="YOOO this works!"
          song="I can do all things REACT"
          likes={223}
          messages={656}
          shares={489}
        /> 
        */}
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
