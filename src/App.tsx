import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Header'
import { Profile } from './Profile'

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.body}>
        <Profile />
      </div>
    </div>
  )
}

export default App
