import { useState, useContext } from "react";
import { VideoContext } from "../context/videoContext"
import { toast } from "react-toastify";
export const Webhook = () => {

    const apiKey = process.env.REACT_APP_API_KEY
    const VideoDetails = useContext(VideoContext)
    const [webhookurl, setWebhookUrl] = useState()
    const addWebhook = async () => {
        toast.info("Adding webhook")
        const data = {
            url: webhookurl,
            events: null,
            entity_id: VideoDetails.videoId
        };

        const options = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch("https://api.heygen.com/v1/webhook/endpoint.add", options);
            const responseData = await response.json();

            console.log('Webhook added successfully:', responseData);
            if (responseData?.data?.status == "enabled") {
                toast.success("Webhook added")
            }
        } catch (error) {
            console.error('Error adding webhook:', error);
            toast.error("Some error occured")
        }
    };

    return (
        <>
            <div className="mb-3">
                <label htmlFor="textInput" className="form-label">Webhook Url</label>
                <input
                    type="text"
                    className="form-control"
                    id="textInput"
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    value={webhookurl}
                />
                <button onClick={() => addWebhook()} className="btn btn-primary">Register webhook</button>
            </div>
        </>
    )
}