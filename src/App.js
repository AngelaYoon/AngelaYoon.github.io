import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom'

const getPosts = () => 
  fetch("https://dev.to/api/articles?username=angelayoon").then((res) =>
    res.json()
  )

const getPost = (id) => 
  fetch(`https://dev.to/api/articles${id}`).then((res) => 
    res.json()
  )

const Post = () => {
  const { id } = useParams()

  const [post, setPost] = React.useState([])

  React.useEffect(() => {
    getPost(id).then((data) => setPost(data))
  },[])
  
  return <>{post.body_html}</>
}

const Posts = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    getPosts().then((data) => setPosts(data))
  }, [])

  return(
    <>
      {posts.map((post) => (
        <Link className="App-link" to={`posts/${post.id}`}>
          {post.title}
        </Link>
      ))}
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img 
            src="https://media-exp1.licdn.com/dms/image/C5603AQG6KeNY5pMjsQ/profile-displayphoto-shrink_200_200/0/1628085038443?e=1633564800&v=beta&t=-9BNiS-2sg-4J4XiJNFTBk21RvDaY_WO3QdC4BT4tUM" 
            className="App-logo" 
            alt="logo"
          />
          <p>Angela Yoon</p>
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route exact path="/posts/:id">
              <Post />
            </Route>
          </Switch>
          
        </header>
      </div>
    </Router>
  )
}

export default App;