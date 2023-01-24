import { AddCircleOutline, PetsOutlined } from '@mui/icons-material';
import { Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <Tabs centered > 
                <Tab
                    label="Pets"
                    icon={<PetsOutlined />}
                    component={Link}
                    to='/'
                    />
                <Tab
                    label="Add Pet"
                    icon={<AddCircleOutline />}
                    component={Link}
                    to='/add-new-pet'
                />
            </Tabs>
        </Paper>
    );
};

export default Footer;