import React from 'react';
import logo from './logo.svg';
import './App.css';

const getPosts =() => 
  fetch('https://dev.to/api/articles?username=angelayoon').then((res) =>
  res.json()
  )
 
function App() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    getPosts().then(data => setPosts(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQG6KeNY5pMjsQ/profile-displayphoto-shrink_200_200/0/1628085038443?e=1633564800&v=beta&t=-9BNiS-2sg-4J4XiJNFTBk21RvDaY_WO3QdC4BT4tUM" className="App-logo" alt="logo" />
        <p>
          Angela Yoon
        </p>
        {posts.map((posts) => (
          <a
          className="App-link"
          href={posts.url}
          target="_blank"
          rel="noopener noreferrer"
          >
            {posts.title}
          </a>
        ))}
      </header>
    </div>
  )
}

export default App;