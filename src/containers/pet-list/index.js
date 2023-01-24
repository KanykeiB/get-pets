import React, {useEffect}from 'react'; 
// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import petOperations from '../../redux/pet/thunk'
// icons
import {
    PersonOutline,
    PetsOutlined,
    LocationOn,
    PunchClockOutlined,
    TransgenderOutlined,
} from '@mui/icons-material';
import PetListItem from '../../components/pet-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { getPets, isLoading } from '../../redux/pet/selectors';

export default function PetList() {
    // selectors 
    const petsList = useSelector(getPets)
    const isLoadingPets = useSelector(isLoading)
    // thunks
    const {getPetsList} = petOperations
    //dispatch
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(petOperations.getPetsList())
    }, [])

    //loader
    if (isLoadingPets) {
        return <p>Loading...</p> 
    }
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <List>
                {petsList.map((item, idx)=>(
                        <PetListItem
                            key={item.id}
                            id={item.id}
                            petType={item.animal}
                            petFieldData={[
                                {icon: <PersonOutline/>, data: item.name},
                                {icon: <PetsOutlined/>, data: item.breed},
                                {icon: <LocationOn/>, data: item.location},
                                {icon: <PunchClockOutlined/>, data: item.age},
                                {icon: <TransgenderOutlined/>, data: item.sex}
                            ]}
                        />
                ))}

            </List>
        </Box>
    );
};