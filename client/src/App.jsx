import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element = {<Public/>}/>
          <Route path='login' element = {<Login/>}/>
        
        <Route path='dash' element= {<DashLayout/>}>
          <Route index element = {<Welcome/>}/>


          <Route path='notes'>
              <Route index element = {<NotesList/>}/>
            </Route>

          <Route path='users'>
              <Route index element = {<UsersList/>}/>
            </Route>


          </Route> {/*End dash*/}

        </Route>
      </Routes>
    </div>
  )
}

export default App
