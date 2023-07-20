// Dependencies
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

// Components
import { TextInput } from '../../common/TextInput';
import { Checkbox } from '../../common/Checkbox';

// Types
import { TEXT_INPUT_VARIANT } from '../../common/TextInput/types';

// Export component
export const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  
  const handleLogin = () => {};
  
  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleChange,
    resetForm
  } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
  });
  
  return (
    <div className="max-w-[440px] min-h-[580px] w-full rounded-[35px] bg-white sm:border-[18px] border-[8px] border-[#00C5FF] py-12 mx-4">
      <img className={'w-[380px] mx-auto sm:block hidden'} src={'/images/logos/full-logo.png'} alt={'full-logo'} />
      <img className={'mx-auto sm:hidden block w-32'} src={'/images/logos/Logo-01.svg'} alt={'full-logo'} />
      <div className={'sm:px-[38px] px-6'}>
        <TextInput
          name={'username'}
          className={'flex-1 mt-[38px]'}
          label={
            <div className={'flex items-center mb-1'}>
              <img className={'w-6 h-6'} src={'/images/icons/user-icon.svg'} alt={'user icon'} />
              <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Username</p>
            </div>
          }
          variant={TEXT_INPUT_VARIANT.CONTAINED}
          value={values.username}
          onChange={handleChange}
          error={errors.username}
        />
        <TextInput
          name={'password'}
          className={'flex-1 mt-[38px]'}
          label={
            <div className={'flex items-center mb-1'}>
              <img className={'w-6 h-6'} src={'/images/icons/key-icon.svg'} alt={'user icon'} />
              <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Password</p>
            </div>
          }
          variant={TEXT_INPUT_VARIANT.CONTAINED}
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          type={'password'}
        />
        <Checkbox
          className={'mt-[21px]'}
          checked={rememberMe}
          onClick={() => setRememberMe(prev => !prev)} label={'Remember me'}
        />
        <button className="w-full h-[49px] bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-5 mb-[19px]">Log In</button>
        <a href={'#'} className={'text-[14px] font-semibold text-[#C8C5C5]'}>Lost your password?</a>
      </div>
    </div>
  );
};
