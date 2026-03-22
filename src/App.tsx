import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsAndConditions } from './pages/Terms'

export default function App() {
  return (
    <BrowserRouter basename='/mossway-site'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  )
}
