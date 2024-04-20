import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import Header from "./Header";

function SellForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 2000);
  };

  const placeholderStyle = {
    width: "auto",
    height: "650px", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Stack className="SellForm" minWidth="100vw" alignItems="center">
        <Header />
        <form>
          <TextField
            sx={{
              "& .MuiFilledInput-root": {
                backgroundColor: "#757575",
                color: "#f5f5f5",
              },
            }}
            id="filled-basic"
            label="Input Link"
            variant="filled"
          />
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#3f51b5",
              "&:hover": {
                backgroundColor: "green", // Set the hover color to green
              },
            }}
            style={{ padding: '15.7px', marginLeft: '10px' }}
            variant="contained"
          >
            Get Appraisal
          </Button>
        </form>
        <div style={placeholderStyle}>
          {isSubmitted && (
            <img
              src="https://cdn.discordapp.com/attachments/1230590359147647028/1231343030343172157/kelleybluebook.png?ex=6625790f&is=6624278f&hm=c5cd841143081a58e6898a22bb76b655c1c6c690f5e9380130756f07996d9e46&"
              alt="Kelly Blue Books"
              style={{ width: "100%", height: "auto" }} // Ensure the image fills the placeholder
            />
          )}
        </div>
      </Stack>
    </>
  );
}

export default SellForm;