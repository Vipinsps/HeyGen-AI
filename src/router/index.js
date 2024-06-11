
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import Home from "../pages/home"
import { Getvideo } from "../pages/getvideo"
import { Webhook } from "../pages/webhook"


function RouterView() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="getvideo/" element={<Getvideo />} />
                <Route path="webhook/" element={<Webhook />} />
            </Routes>
        </>
    )
}
export default RouterView