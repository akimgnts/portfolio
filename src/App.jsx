import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import RouteEffects from './components/RouteEffects'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsGallery from './pages/ProjectsGallery'
import ProjectDetail from './pages/ProjectDetail'
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminProjects = lazy(() => import('./pages/admin/AdminProjects'))
const AdminProjectCreate = lazy(() => import('./pages/admin/AdminProjectCreate'))
const AdminProjectEdit = lazy(() => import('./pages/admin/AdminProjectEdit'))

function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
      <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-foreground px-5 py-3 text-background focus:translate-y-0">Skip to content</a>
      <Suspense fallback={<main id="main-content" className="min-h-screen grid place-items-center"><p role="status">Loading page…</p></main>}>
      <RouteEffects />
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

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      </MotionConfig>
    </BrowserRouter>
  )
}

export default App
