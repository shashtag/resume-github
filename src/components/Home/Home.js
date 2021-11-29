import { Button, TextField, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UIContext } from "../../Context/UIContext";

function Home() {
  const [username, setUsername] = useState("");
  const [usernameL, setUsernameL] = useState("");
  const [disable, setDisable] = useState(true);
  const { dispatch } = useContext(UIContext);

  const history = useHistory();

  const showResume = () =>
    username.length && usernameL.length && history.push(`/${username}`);
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
      <br />
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
        type='file'
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
        onChange={(e) => {
          setUsernameL(e.target.value);
          console.log(e.target.files);
          var file = e.target.files[0];

          var reader = new FileReader();

          reader.onload = function (e) {
            var content = JSON.parse(reader.result);
            dispatch({ type: "SET_DATA", payload: content });
            setDisable(false);
          };

          reader.readAsText(file);
        }}
        value={usernameL}
      />

      <br />
      <Button
        variant='contained'
        disabled={disable}
        color='primary'
        onClick={() => showResume()}>
        Generate
      </Button>
    </>
  );
}

export default Home;
