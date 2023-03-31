import './App.css';
import axios from 'axios';
import Container from './components/Container';
import { useEffect, useState } from "react";



function App() {

  const [url, setUrl] = useState("octocat ");
  const [name, setName] = useState(" ");
  const [pic, setPic] = useState(" ");
  const [user, setUser] = useState(" ");
  const [date, setDate] = useState(" ");
  const [bio, setBio] = useState(" ");
  const [repos, setRepos] = useState(" ");
  const [followers, setFollowers] = useState(" ");
  const [following, setFollowing] = useState(" ");
  const [pin, setPin] = useState(" ");
  const [twitter, setTwitter] = useState(" ");
  const [blog, setBlog] = useState(" ");
  const [building, setBuilding] = useState(" ");
  const [error, setError] = useState(false);


  function handleSearch(x) {
    setUrl(x);
    
  }

  useEffect(() => {

    axios.get(`https://api.github.com/users/${url}`).then(function (response) {
      console.log(response.data);
      setName(response.data.name);
      setPic(response.data.avatar_url);
      setUser(response.data.login);
      setDate(response.data.created_at);
      setBio(response.data.bio);
      setRepos(response.data.public_repos);
      setFollowers(response.data.followers);
      setFollowing(response.data.following);
      setPin(response.data.location);
      setTwitter(response.data.twitter_username);
      setBlog(response.data.blog);
      setBuilding(response.data.company)
      setError(false);


    }).catch(function (error) {
      console.log(error);
      setError(true);
    });
  }, [url]);

  
  


  return(
    <>
     
     <Container username={name} onSearch={handleSearch} avatar={pic} user={user} date={date} bio={bio} repos={repos} followers={followers} following={following} pin={pin} twitter={twitter} blog={blog} building={building} error={error}/>
    </>
  ) 


}

export default App;
