import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingV1 } from "@/pages/LandingV1"
import { LandingV2 } from "@/pages/LandingV2"
import { LandingV3 } from "@/pages/LandingV3"
import { LandingV4 } from "@/pages/LandingV4"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingV1 />} />
        <Route path="/v2" element={<LandingV2 />} />
        <Route path="/v3" element={<LandingV3 />} />
        <Route path="/v4" element={<LandingV4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
