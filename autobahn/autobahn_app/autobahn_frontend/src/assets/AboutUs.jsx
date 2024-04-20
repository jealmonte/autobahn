import React from 'react';
import { Button } from '@mui/material';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';

function AboutUs(){
    return(
        <Button variant="outlined" style={{border: '2px solid', textTransform: 'none', background:'#757575', maxHeight: '35px', minHeight: '35px', minWidth: '140px', maxWidth: '140px'}} sx={{color:'#f5f5f5'}} startIcon={<EmojiPeopleRoundedIcon />}>
            About
        </Button>
    );
}

export default AboutUs;