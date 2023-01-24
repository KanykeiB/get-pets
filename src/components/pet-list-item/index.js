import React from 'react';  
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import petOperations from '../../redux/pet/thunk'
// mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// mui icons
import { IconButton, ListItem } from '@mui/material';
import {
    DeleteOutline,
    Edit,
    LabelImportantOutlined,
} from '@mui/icons-material';
import style from './style.module.css'

export default function PetListItem(props) {
    const dispatch = useDispatch()

    const {deletePet, getPetsList} = petOperations

    const {
        petFieldData,
        petType,
        id
        } = props

    const handleDeleteButton = async (id) => {
        await dispatch(deletePet(id))
        await dispatch(getPetsList())
    };

    return (
        <List className={style.listWrap}>
        <ListItem
            secondaryAction={
                <>
                    <Link to={`/edit-pet/${id}`}>
                        <IconButton onClick={()=>null}>
                            <Edit/>
                        </IconButton>
                    </Link>
                    <IconButton 
                        onClick={()=>handleDeleteButton(id)}
                        sx={{ padding: 2}}>
                        <DeleteOutline color="secondary"/>
                    </IconButton>
                </>
            }
        >
            <ListItemButton>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary={petType}
                        secondary="Name, Breed, Location, Age, Sex"
                    />
            </ListItemButton>
        </ListItem>
                <List component="div" disablePadding>
                    {
                        petFieldData.map((item, i)=>(
                            <ListItemButton key={i}  sx={{ pl: 9 }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.data} />
                            </ListItemButton>
                        ))
                    }
                </List>
        </List>
    );
};