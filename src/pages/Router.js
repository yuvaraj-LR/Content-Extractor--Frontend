import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Pricing from "./Pricing"
import Feature from "./Feature"
import API from "./API"
import NotFound from "./NotFound"

export const ContentRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/feature" element={<Feature />} />
                <Route path="/api" element={<API />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}