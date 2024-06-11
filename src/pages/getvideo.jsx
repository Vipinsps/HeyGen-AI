import { useState, useContext } from "react"
import { VideoContext } from "../context/videoContext"
export const Getvideo = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const VideoDetails = useContext(VideoContext)
    const HandleGetVideo = async () => {
        if (VideoDetails.videoId == '') {
            alert("please generate video first")
            return
        }
        await fetch(`https://api.heygen.com/v1/video_status.get?video_id=${VideoDetails.videoId}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
            },
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log("get video:- ", data);
                if (data?.data?.status == 'completed') {
                    VideoDetails.setVideoUrl(data.data.video_url) 

                } else {
                    alert("Video is in progress")
                }
                console.log("video URL", VideoDetails.videoUrl)
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });

    }
    return (

        <>
            Getvideo
            <div className="mb-3">
                <label htmlFor="video" className="form-label">Video</label>
                <div className="embed-responsive embed-responsive-16by9">
                    {VideoDetails.videoUrl == "" ?
                        <h1>No video available </h1> :
                        <iframe
                            className="embed-responsive-item"
                            src={VideoDetails.videoUrl}
                            allowFullScreen
                            title="Video"
                        ></iframe>
                    }
                </div>
            </div>
            <button onClick={() => HandleGetVideo()} className="btn btn-primary">Get Video</button>


        </>
    )
}