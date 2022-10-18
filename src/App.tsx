import styles from './App.module.css'
import { Header } from '././components/Header'
import { Post } from './components/Post'
import { Profile } from './components/Profile'

const post = [
  {
    id: crypto.randomUUID(),
    author: {
      avatarUrl: 'https://github.com/gustavosalviato.png',
      name: 'gustavosalviato',
      role: 'Front-End Developer',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: ' 👉 jane.design/doctorcare' }
    ],

    publishedAt: new Date('2022-10-16 20:00:00'),
  },


  {
    id: crypto.randomUUID(),
    author: {
      avatarUrl: 'https://github.com/github.png',
      name: 'github',
      role: 'Version Code',
    },


    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: ' 👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-10-16 20:00:00'),
  },


]

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.body}>
        <Profile />

        <div>
          {post.map((post, index) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
