import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [usernameL, setUsernameL] = useState("");
  const history = useHistory();

  const showResume = () =>
    username.length &&
    usernameL.length &&
    history.push(`/${username}/${usernameL}`);
  return (
    <>
      <Typography variant='h2' style={{ margin: "2rem 0" }}>
        Get your resume now!
      </Typography>
      <Typography variant='p' style={{ margin: "2rem 0" }}>
        Get your resume built with your public information provided by Github
        and LinkedIn containing top repositories, contribution, statistics and
        more...
      </Typography>
      <TextField
        InputProps={{
          startAdornment: (
            <i className='fab fa-github' style={{ marginRight: "0.25rem" }}></i>
          ),
        }}
        style={{ width: "300px", margin: "2rem 0" }}
        label='Enter Github Username'
        // variant='outlined'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <br />
      <TextField
        InputProps={{
          startAdornment: (
            <i
              className='fab fa-linkedin'
              style={{ marginRight: "0.25rem" }}></i>
          ),
        }}
        style={{ width: "300px", margin: "0rem 0 2rem 0" }}
        label='Enter LinkedIn Username'
        // variant='outlined'
        onChange={(e) => setUsernameL(e.target.value)}
        value={usernameL}
      />

      <br />
      <Button variant='contained' color='primary' onClick={() => showResume()}>
        Generate
      </Button>
    </>
  );
}

export default Home;
