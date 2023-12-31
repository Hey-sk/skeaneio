import { useState } from 'react'
import axios from 'axios'
import style from './styles/app.module.css'

export default function App() {
  const [profile, setProfile] = useState({})

  const getProfile = async() => {
    try {
      const response = await axios.get('/api/profile')
      console.log({response: response})
      setProfile(response.data)
    } catch(err) {
      console.log({getProfileError: err})
    }
  }

  return (
    <div className={style.app}>
      <h3>hello Flask / React!</h3>
      <button onClick={getProfile} style={{color:'white', backgroundColor:'#5c5a5e'}}>get profile</button>
      {profile &&
        <>
          <p>{profile.name}</p>
          <p>{profile.bio}</p>
        </>

      }
    </div>
  )
}
