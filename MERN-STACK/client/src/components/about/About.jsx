import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h4">Blogify</Typography>
                <Text variant="h5">• Designed and implemented a user-friendly platform enabling individuals to create, edit and share journal entries
inclusive of multimedia content, fostering an engaging and interactive community 
<br />
• React, Node, Express, MongoDB was used to build the website.
<br />
• 10+ prominent features including login/sign-up, view, create, delete and comment on others blog etc, used JWT
authentication for login.
<br/>
Github : 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/arpiii7474" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Reach out to me on 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/arpita-agarwal-9470a5203/" color="inherit" target="_blank">
                            <LinkedInIcon />
                        </Link>
                    </Box>  
                          or send me an Email on arpitaagarwal240@gmail.com
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;