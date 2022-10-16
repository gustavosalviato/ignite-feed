import { useState } from 'react'
import styles from './App.module.css'
import { Header } from '././components/Header'
import { Post } from './components/Post'
import { Profile } from './components/Profile'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.body}>
        <Profile />

        <div>
          <Post />
        </div>
      </div>
    </div>
  )
}

export default App
