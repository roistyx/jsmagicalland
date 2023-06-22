import React, { useState } from "react";
import { Center, Rows } from "../layouts/Line";
import { Box } from "../layouts/Box";
import "./style.css";

const code = `function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
      errorCallback({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      callback("Thumbs up and Subscribe");
    }
  }

  watchTutorialCallback(
    (the_message) => {
      console.log("Success" + the_message);
    },
    (error) => {
      console.log(error.name + ", " + error.message);
    }
  );`;

function Callback() {
  const [userLeft, setUserLeft] = useState(false);

  const [userWatchingCatMeme, setUserWatchingCatMeme] = useState(false);

  const handleUserLeftChange = () => {
    setUserLeft(!userLeft);
  };

  const handleUserWatchingCatMemeChange = () => {
    setUserWatchingCatMeme(!userWatchingCatMeme);
  };

  const textAreaView = (
    <div>
      <textarea
        id="w3review"
        name="w3review"
        rows="25"
        cols="56"
        defaultValue={code}
      />
    </div>
  );

  function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
      errorCallback({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      callback("Thumbs up and Subscribe");
    }
  }

  watchTutorialCallback(
    (the_message) => {
      console.log("Success" + the_message);
    },
    (error) => {
      console.log(error.name + ", " + error.message);
    }
  );
  return (
    <div>
      <Center>
        <div className="box">
          <div className="error"> {userLeft ? "User left" : ""} </div>
          <div className="error">
            {userWatchingCatMeme ? "User is watching cat meme" : ""}
          </div>
          <div>
            {!userLeft && !userWatchingCatMeme ? "User is still here" : ""}
          </div>
        </div>
      </Center>
      <Center>
        <Rows>
          <Box>
            <label>
              <input
                type="checkbox"
                checked={userLeft}
                onChange={handleUserLeftChange}
              />
              Did user leave?
            </label>

            <label>
              <input
                type="checkbox"
                checked={userWatchingCatMeme}
                onChange={handleUserWatchingCatMemeChange}
              />
              Is user watching a cat meme?
            </label>
          </Box>
        </Rows>
      </Center>
      <Center>
        <Box>{textAreaView}</Box>
      </Center>
    </div>
  );
}

export default Callback;
