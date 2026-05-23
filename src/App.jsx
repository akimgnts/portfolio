import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Future pages (stubs prepared)
// import ProjectDetail from './pages/ProjectDetail'
// import ProjectsGallery from './pages/ProjectsGallery'
// import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Future routes — ready for implementation */}
        {/* <Route path="/projects" element={<ProjectsGallery />} /> */}
        {/* <Route path="/projects/:slug" element={<ProjectDetail />} /> */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}

        {/* 404 fallback */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
