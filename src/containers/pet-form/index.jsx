import React from 'react';
import {
    Typography,
    TextField,
    Box,
    Button,
    Paper
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import Footer from '../../components/footer';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import petOperations from '../../redux/pet/thunk';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
    name: yup.string().required(),
    animal: yup.string().required(),
    breed: yup.string().required(),
    location: yup.string().required(),
    age: yup.number().required().positive().integer(),
    sex: yup.string().required(),
  });

const PetForm = (props) => {
    const dispatch = useDispatch()
    const {deletePet, getPetsList, createNewPet} = petOperations
        const {
        children,
        onClick
    } = props

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = (data) =>{
        const obj = JSON.stringify({"data":data})
        dispatch(createNewPet(obj))
        dispatch(getPetsList())
    } 
      return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        >
            <TextField 
                required
                id="filled-name"
                label="Name"
                variant="outlined"
                {...register("name")} 
            />
            {errors.name && <p>{errors.name.message}</p>}
            <TextField
                id="filled-animal"
                label="Animal"
                variant="outlined"
                helperText="Cat, Dog, Bird"
                {...register("animal")} 
            />
            {errors.animal && <p>{errors.animal.message}</p>}
            <TextField 
                    required
                    id="filled-animal"
                    label="Breed"
                    variant="outlined"
                    {...register("breed")} 
                />
                {errors.breed && <p>{errors.breed.message}</p>}
            <TextField 
                required
                id="filled-location-input"
                label="Location"
                variant="outlined"
                {...register("location")} 
            />
            {errors.location && <p>{errors.location.message}</p>}
            <TextField
                required
                id="filled-age"
                label="Age"
                type="number"
                variant="outlined"
                {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <p>{errors.age.message}</p>}
            <TextField
                    required
                    id="sex"
                    label="Sex"
                    helperText="Male, Female"
                    variant="outlined"
                    {...register("sex")} 
                />
            {errors.sex && <p>{errors.sex.message}</p>}
            {/* <Link to={'/'}> */}
                <Button 
                     variant="outlined" 
                     type="submit"
                     onClick={onClick} 
                     startIcon={<Edit />}>
                         {children}
                 </Button>
                 {/* </Link> */}
                 <Footer/>
        </form>
      );
};

export default PetForm;