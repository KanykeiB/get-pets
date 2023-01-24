import { AddCircleOutline, PetsOutlined } from '@mui/icons-material';
import { Paper, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './style.module.css'

const Footer = () => {
    // value was given to show the selected tab
    const [value, setValue] = useState("2")
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <Paper className={styles.paper}>
            <Tabs centered 
                value={value}
                onChange={handleChange}
            > 
                <Tab
                    value="1"
                    label="Pets"
                    icon={<PetsOutlined />}
                    component={Link}
                    to='/'
                    />
                <Tab
                    value="2"
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