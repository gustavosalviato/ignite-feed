import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Header'
import { Post } from './Post'
import { Profile } from './Profile'

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
