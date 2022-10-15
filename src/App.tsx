import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Header'
import { Profile } from './Profile'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.body}>
        <Profile />


        <div>
          asjhdsahdjadhakjdhdjhasdh
        </div>
      </div>
    </div>
  )
}

export default App
