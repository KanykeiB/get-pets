import React, { useEffect, useState } from 'react';  
// mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// mui icons
import { IconButton, ListItem } from '@mui/material';
import {
    DeleteOutline,
    Edit,
    ExpandMore,
    ExpandLess,
    LabelImportantOutlined,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import petOperations from '../../redux/pet/thunk'
import { Link } from 'react-router-dom';

// nav
export default function PetListItem(props) {
    const dispatch = useDispatch()
    const {deletePet, getPetsList} = petOperations

    const {
        petFieldData,
        petType,
        id
        } = props
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const handleDeleteButton = async (id) => {
        await dispatch(deletePet(id))
        await dispatch(getPetsList())
    };
    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
        <ListItem
            secondaryAction={
                <>
                    <Link to={`/edit-pet/${id}`}>
                    <IconButton onClick={()=>null} edge="end" aria-label="edit">
                        <Edit sx={{ color: 'green' }}/>
                    </IconButton>
                    </Link>
                    <IconButton onClick={()=>handleDeleteButton(id)} edge="end" aria-label="delete" sx={{ padding: 2}}>
                        <DeleteOutline color="secondary"/>
                    </IconButton>
                </>
            }
        >
            <ListItemButton disableRipple onClick={()=>null}>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary={petType}
                        secondary="Name, Breed, Location, Age, Sex"
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
        </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        petFieldData.map((item, i)=>(
                            <ListItemButton key={i} disableRipple sx={{ pl: 9 }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.data} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </List>
    );
};