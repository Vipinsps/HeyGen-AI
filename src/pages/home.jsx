import React, { useContext, useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VideoContext } from '../context/videoContext';
import { toast } from 'react-toastify';

const Home = () => {
    const [textInput, setTextInput] = useState('');
    const [dropdownValue, setDropdownValue] = useState('option1');
    const [color, setColor] = useState('#fff');
    const apiKey = process.env.REACT_APP_API_KEY

    const VideoDetails = useContext(VideoContext)
    // useEffect(()=>{
    //     console.log(VideoDetails,"test")
    // },[])

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleDropdownChange = (event) => {
        setDropdownValue(event.target.value);
    };

    const handleColorChange = (color) => {
        setColor(color.hex);
    };


    const formContainerStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: '#f8f9fa'
    };


    async function generateVideo() {
        
        if (textInput == "") {
            alert("please enter the text")
            return
        }
        const requestBody = {
            video_inputs: [
                {
                    // character: {
                    //     type: 'avatar',
                    //     avatar_id: 'Daisy-inskirt-20220818',
                    //     avatar_style: 'normal',
                    // },

                    "character": {
                        "type": "talking_photo",
                        "talking_photo_id": "b8a9a389f73f4f8584725ce822d67c04"
                    },
                    voice: {
                        type: 'text',
                        input_text: textInput,
                        voice_id: '957336970bc64d479d551fea07e56784',
                    },
                    background: {
                        type: 'color',
                        value: color,
                    },
                },
            ],
            dimension: {
                width: 1280,
                height: 720,
            },
            aspect_ratio: '16:9',
            test: true,
        };

        await fetch('https://api.heygen.com/v2/video/generate', {
            method: 'POST',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                VideoDetails.setVideoId(data.data.video_id)
                toast.info("Peparing your video")

            })
            .catch(error => {
                console.error('Error:', error);
            });

    }


    return (
        <div className="container mt-5">
            <div style={formContainerStyle}>
                    <div className="mb-3">
                        <label htmlFor="textInput" className="form-label">Text Input</label>
                        <input
                            type="text"
                            className="form-control"
                            id="textInput"
                            value={textInput}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="dropdown" className="form-label">Dropdown</label>
                        <select
                            className="form-select"
                            id="dropdown"
                            value={dropdownValue}
                            onChange={handleDropdownChange}
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="colorPicker" className="form-label">Choose Background Color</label>
                        <SketchPicker
                            color={color}
                            onChangeComplete={handleColorChange}
                            id="colorPicker"
                        />
                        <p>Current selected color is : {color}</p>
                    </div>
                    <button onClick={() => generateVideo()} className="btn btn-primary">Generate Video</button>

            </div>
        </div>
    );
};

export default Home;
