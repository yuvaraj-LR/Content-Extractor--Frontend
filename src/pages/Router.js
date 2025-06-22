import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Pricing from "./Pricing"
import Feature from "./Feature"
import API from "./API"
import NotFound from "./NotFound"
import Navbar from "../components/Navbar"

export const ContentRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/feature" element={<Feature />} />
                    <Route path="/api" element={<API />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}