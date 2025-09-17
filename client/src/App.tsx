import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome'
import MessageForm from './pages/MessageForm'
import AllMessages from './pages/AllMessages'
import type {FC} from "react";

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/form" element={<MessageForm/>}/>
      <Route path="/messages" element={<AllMessages/>}/>
    </Routes>
  </BrowserRouter>
)

export default App
