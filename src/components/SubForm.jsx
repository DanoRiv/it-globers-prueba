import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { getEmail } from '../redux/actions'
import style from './css/SubForm.module.css'
import sendArrow from '../assets/images/right-long-arrow-svgrepo-com.svg'

function SubForm() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const dispatch = useDispatch()

    console.log(errors)
    const onSubmit = (data, e) => {
        e.target.reset();
        dispatch(getEmail(data.email))
    }

  return (
    <div className={style.subscriptionForm}>
        <small>Newsletter</small>
        <h2>Suscribite</h2>
        <p>Y enterate de todas las novedades</p>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <input {...register('email', {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}
            aria-invalid={errors.email ? "true" : "false"} 
            placeholder='Ingresa tu email'
            />
        {errors.email?.type === 'required' && <p className={style.error} role="alert">El campo no puede estar vacío</p>}
        {errors.email?.type === 'pattern' && <p className={style.error} role="alert">Debe ser un correo válido</p>}
            <button type='submit'> <img className={style.arrow} src={sendArrow} width={16} height={16}/></button>
        </form>
    </div>
  )
}

export default SubForm