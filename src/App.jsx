import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsGallery from './pages/ProjectsGallery'
import ProjectDetail from './pages/ProjectDetail'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminProjects from './pages/admin/AdminProjects'
import AdminProjectCreate from './pages/admin/AdminProjectCreate'
import AdminProjectEdit from './pages/admin/AdminProjectEdit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsGallery />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/projects/new" element={<AdminProjectCreate />} />
        <Route path="/admin/projects/:slug/edit" element={<AdminProjectEdit />} />

        {/* 404 fallback */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
