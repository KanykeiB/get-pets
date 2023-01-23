import React from 'react';
import {
    Typography,
    TextField,
    Box,
    Button,
    Paper
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import LabelBottomNavigation from '../../components/footer';

const Form = (props) => {
    const {
        children
    } = props
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                    display: 'flex',
                    flexDirection: 'column'
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                        {children} 
                    </Typography>
                    <TextField
                        required
                        id="filled-name"
                        label="Name"
                        variant="outlined"
                        // onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-animal"
                        label="Animal"
                        variant="outlined"
                        helperText="Cat, Dog, Bird"
                        // onChange={(e)=>setAnimal(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-breed-input"
                        label="Breed"
                        variant="outlined"
                        // onChange={(e)=>setBreed(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-location-input"
                        label="Location"
                        variant="outlined"
                        // onChange={(e)=>setLocation(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-age"
                        label="Age"
                        type="number"
                        variant="outlined"
                        // onChange={(e)=>setAge(e.target.value)}
                    />
                    <TextField
                        required
                        id="sex"
                        label="Sex"
                        helperText="Male, Female"
                        variant="outlined"
                        // onChange={(e)=>setSex(e.target.value)}
                    />
                </div>
                <div>
                    <Button 
                    variant="outlined" 
                    // onClick={handleEditPet} 
                    startIcon={<Edit />}>
                        {children}
                    </Button>
                </div>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <LabelBottomNavigation/>
                </Paper>
            </Box>
        </div>
    );
};

export default Form;