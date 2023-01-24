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
import Footer from '../../components/footer';
import { useDispatch, useSelector } from 'react-redux';

export default function PetList() {
    const petsList = useSelector((state=> state.petList.list))
    const dispatch = useDispatch()
    const {getPetsList} = petOperations
  
    useEffect(()=>{
      dispatch(petOperations.getPetsList())
    }, [])
    
  console.log(petsList, 'petlist')

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
                <Footer/>
        </Box>
    );
};