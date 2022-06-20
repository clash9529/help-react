
import { Typography,  CssBaseline, Grid,Container } from '@mui/material';
import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';   


const Input = styled('input')({
    display: 'none',
  });
  


const theme = createTheme();

function AddDeceased() {
  const [sex, setSex] = React.useState('');
  const handleChange = (event) => {
    setSex(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // call api here
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            
          }}
        >
        
          <div>
             <AccountCircleIcon style={{ fontSize: 50 , position: 'left' } } />

          </div>
          <Divider />
          <div>
            <Typography component="h1" variant="h5" align="center" gutterBottom marginTop={2}>
                Missing Person
            </Typography>
          </div>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  
                  name="name"
        
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  
                  fullWidth
                  id="DOB"
                  label="Date of Birth"
                  name="DOB"

                />
              </Grid>
        <FormControl required sx={{ m: 2, minWidth:100 }}  >
        <InputLabel id="Sex">Sex</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={sex}
          label="sex *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Female</MenuItem>
          <MenuItem value={20}>Male</MenuItem>

        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  label="Date Found"
                  name="date"
                />
              </Grid>
              <FormControl required sx={{ m: 2, minWidth: 200 }} >
        <InputLabel htmlFor="haircolour">Hair Colour </InputLabel>
        <Select defaultValue="" id="haircolour" label="hair1">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Black</MenuItem>
          <MenuItem value={2}>Blonde</MenuItem>
          <MenuItem value={3}>Brown</MenuItem>
          <MenuItem value={4}>Red</MenuItem>
        </Select>
      </FormControl>
      <FormControl required sx={{ m: 2, minWidth: 200 }}  >
        <InputLabel htmlFor="hairlength">Hair Length </InputLabel>
        <Select defaultValue="" id="hairlength" label="hair2">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Long</MenuItem>
          <MenuItem value={2}>Short</MenuItem>
          <MenuItem value={3}>Medium</MenuItem>
        </Select>
        </FormControl>
        <FormControl required sx={{ m: 2, minWidth: 200 }}  >
        <InputLabel htmlFor="skincolour">Skin Colour </InputLabel>
        <Select defaultValue="" id="skincolour" label="skin">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Dark</MenuItem>
          <MenuItem value={2}>Medium</MenuItem>
          <MenuItem value={3}>Light</MenuItem>
        </Select>
      
      </FormControl>
              <Grid item xs={7} sm={7}>
                <TextField
                  required
                  fullWidth
                  name="location"
                  label="Location"
                  type="location"
                  id="location"
                />
              </Grid>
              <Grid item xs={5} sm={5}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Current Location" 
                  fontSize='12'
                />
              </Grid>
              <Grid item xs={7} sm={7}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="city"
                  id="city"
                />
              </Grid>
              <Grid item xs={5} sm={5}>
                <TextField
                  required
                  fullWidth
                  name="apt"
                  label="Apt, Bldg, Suitd"
                  type="apt"
                  id="apt"
                />
              </Grid>
            </Grid>
            <Typography component="h5" variant="subtitle1" align="left" gutterBottom marginTop={2}>
                Description *
            </Typography>
              <Grid item xs={12} sm={12} marginBottom={5}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  name="description"
                  label="Any notable observation to help identify the body"
                  type="description"
                  id="description"
                  
                />
              </Grid>
              <Typography component="subtitle1" variant="h8" align="left" marginTop={2}>
                Photos (ID, Body, Location etc)
            </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
      <label htmlFor="contained-button-file" required>
        <Input accept="image/*" id="contained-button-file" multiple type="file" required/>
        <Button variant="outlined" component="span" required>
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             marginBottom= '10'>
              Post
            </Button>

          </Box >
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}


export default AddDeceased;