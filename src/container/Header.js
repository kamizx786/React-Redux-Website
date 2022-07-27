import ReactFacebookLogin from 'react-facebook-login';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
function Header() {
const [profile,setprofile]=useState(
  {
isloggegin:false,
name:"",
picture:"",
  }
);
  const responseFacebook=(response)=>{
   setprofile({
    isloggegin:true,
    name:response.name,
    picture:response.picture.data.url,
   });
  }
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Redux Shopping Website</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
  {profile.isloggegin?(
      <Navbar.Text>
        <img src={profile.picture} style={{borderRadius:"50%",marginRight:"20px"}}/>
       
        {profile.name}
      <Button style={{marginLeft:"10px"}} onClick={()=>setprofile({isloggegin:false})} >Logout</Button>
      </Navbar.Text>
      ):(
        <Navbar.Text>
        <ReactFacebookLogin
        appId="1695913100807935"
        fields="name,email,picture"
        callback={responseFacebook}
        />
        </Navbar.Text>
      )
  }
        
    
        
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default Header
