// Dependencies
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

// Components
import { TextInput } from '../../common/TextInput';

// Export component
export const SignUpForm = () => {
  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email().required('Email is required'),
    jobTitle: Yup.string().required('Job title is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Password is required'),
  });
  
  const handleSignUp = () => {};
  
  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleChange,
    resetForm
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: handleSignUp,
  });
  
  return (
    <div className={'flex rounded-[25px] overflow-hidden border-[5px] border-[#00C5FF] mx-4'}>
      <img className={'max-w-[546px] min-w-[450px] min-h-[750px] h-full object-cover md:block hidden'} src={'/images/general/sign-up-bg.png'} alt={'sign up bg'} />
      <div className="max-w-[680px] min-h-[750px] w-screen bg-white py-9">
        <img className={'max-w-[380px] w-full mx-auto sm:block hidden'} src={'/images/logos/full-logo.png'} alt={'full-logo'} />
        <img className={'mx-auto sm:hidden block w-32'} src={'/images/logos/Logo-01.svg'} alt={'full-logo'} />
        <p className={'sm:text-[28px] text-[21px] font-semibold text-[#01174F] mt-5 text-center'}>Create Your Account</p>
        <div className={'sm:px-[68px] px-6 sm:mt-[57px] mt-6'}>
          <div className={'w-full flex md:flex-row flex-col'}>
            <TextInput
              name={'firstName'}
              className={'flex-1 sm:mt-[38px] mt-6'}
              label={'First Name'}
              value={values.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <TextInput
              name={'lastName'}
              className={'flex-1 sm:mt-[38px] mt-6 md:ml-[40px] ml-0'}
              label={'Last Name'}
              value={values.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
          <TextInput
            name={'email'}
            className={'flex-1 sm:mt-[38px] mt-6'}
            label={'Email'}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextInput
            name={'jobTitle'}
            className={'flex-1 sm:mt-[38px] mt-6'}
            label={'Job Title'}
            value={values.jobTitle}
            onChange={handleChange}
            error={errors.jobTitle}
          />
          <div className={'w-full flex md:flex-row flex-col'}>
            <TextInput
              name={'password'}
              className={'flex-1 sm:mt-[38px] mt-6'}
              label={'Password'}
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              type={'password'}
            />
            <TextInput
              name={'confirmPassword'}
              className={'flex-1 sm:mt-[38px] mt-6 md:ml-[40px] ml-0'}
              label={'Confirm Password'}
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              type={'password'}
            />
          </div>
          <button className="block max-w-[282px] h-[49px] w-full bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-5 mb-[19px] mx-auto">Create Account</button>
        </div>
      </div>
    </div>
  );
};
