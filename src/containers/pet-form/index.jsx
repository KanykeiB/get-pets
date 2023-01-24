import React from 'react';
import {
    TextField,
    Button,
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import Footer from '../../components/footer';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import petOperations from '../../redux/pet/thunk';
import { useHistory } from 'react-router-dom';
import { getPet} from '../../redux/pet/selectors';


const schema = yup.object().shape({
    name: yup.string().required(),
    animal: yup.string().required(),
    breed: yup.string().required(),
    location: yup.string().required(),
    age: yup.number().required().positive().integer(),
    sex: yup.string().required(),
  });

const PetForm = (props) => {
    const {updatePet, createNewPet, getPetsList} = petOperations
    const {
        children,
        id
        } = props
    const petData = useSelector(getPet)
    const history = useHistory()
    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(schema)
        });
    const dispatch = useDispatch()
    const onSubmit = async (data)=>{
        const obj = JSON.stringify({"data":data})
        if(id){
            await dispatch(updatePet(id, obj))
        } else{
            await dispatch(createNewPet(obj))
        }
            await dispatch(getPetsList())
            history.push('/')
        }

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
                defaultValue={petData?.name || ''}
                id="filled-name"
                label="Name"
                variant="outlined"
                {...register("name")} 
                sx={{m:2}}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <TextField
                defaultValue={petData?.animal || ''}
                id="filled-animal"
                label="Animal"
                variant="outlined"
                helperText="Cat, Dog, Bird"
                {...register("animal")} 
                sx={{m:2}}
            />
            {errors.animal && <p>{errors.animal.message}</p>}
            <TextField 
                defaultValue={petData?.breed || ''}
                id="filled-animal"
                label="Breed"
                variant="outlined"
                {...register("breed")} 
                sx={{m:2}}
                />
                {errors.breed && <p>{errors.breed.message}</p>}
            <TextField 
                defaultValue={petData?.location|| ''}
                id="filled-location-input"
                label="Location"
                variant="outlined"
                {...register("location")} 
                sx={{m:2}}
            />
            {errors.location && <p>{errors.location.message}</p>}
            <TextField
                defaultValue={petData?.age || ''}
                id="filled-age"
                label="Age"
                type="number"
                variant="outlined"
                {...register("age", { valueAsNumber: true })}
                sx={{m:2}}
            />
            {errors.age && <p>{errors.age.message}</p>}
            <TextField
                    defaultValue={petData?.sex || ''}
                    id="sex"
                    label="Sex"
                    helperText="Male, Female"
                    variant="outlined"
                    {...register("sex")} 
                    sx={{m:2}}
                />
            {errors.sex && <p>{errors.sex.message}</p>}
                <Button 
                     variant="outlined" 
                     type="submit"
                     sx={{m:2}}
                     startIcon={<Edit />}>
                         {children}
                 </Button>
                 <Footer/>
        </form>
      );
};

export default PetForm;