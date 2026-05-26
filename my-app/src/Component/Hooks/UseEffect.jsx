import { useEffect, useState } from 'react'

export default function UseEffectHook() {
  const [posts, setPosts] = useState([])
  const [c, setC] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((r) => r.json())
      .then(setPosts)
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <button onClick={() => setC(c + 1)}>Count: {c}</button>
      {posts.map((p) => (
        <div key={p.id} style={{ margin: '16px auto', maxWidth: 600, textAlign: 'left' }}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  )
}
