import { FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { userActions } from '@store/userSlice'

import { MainButton, Card } from '@UI/index'
import { ButtonResetPassword } from '@AuthenticationComponents/index'
import { FormProps } from './types'
import { InputForm, FormItself } from './styles'



const Form: React.FC<FormProps> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { logIn, signUp, updateAccount } = userActions;
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const handleLogin = () => {
        const email = emailInputRef.current!.value;
        const password = passwordInputRef.current!.value;
        if (email.trim() === '' || password.trim() === "") {
            toast.warn('Fill in the form data!');
            return;
        }
        try {
            dispatch(logIn({ email, password }));
            history.push('/user/recent-games');
        } catch (e: any) {
            toast.error(e.message);
        }
    }

    const handleChangeAccount = () => {
        const name = nameInputRef.current!.value;
        const email = emailInputRef.current!.value;
        const password = passwordInputRef.current!.value;
        if (name.trim() === '' || email.trim() === '' || password.trim() === "") {
            toast.warn('Fill in the form data!');
            return;
        }
        try {
            dispatch(updateAccount({ name, email, password }));
            toast.success('Account updated successfully!');
            history.push('/user/recent-games');
        } catch (e: any) {
            toast.warn(e.message)
        }
    }

    const handleSignUp = () => {
        const name = nameInputRef.current!.value;
        const email = emailInputRef.current!.value;
        const password = passwordInputRef.current!.value;
        if (name.trim() === '' || email.trim() === '' || password.trim() === "") {
            toast.warn('Fill in the form data!');
            return;
        }
        try {
            dispatch(signUp({ name, email, password }))
            history.push('/');
        } catch (e: any) {
            toast.error(e.message);
        }
    }

    const handleResetPassword = () => {

    }

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        props.isLogin && handleLogin();
        props.isSignUp && handleSignUp();
        props.isResetPassword && handleResetPassword();
        props.isAccount && handleChangeAccount();
    }

    const signUpInputs = <>
        <InputForm ref={nameInputRef} type="text" placeholder='Name' />
        <InputForm ref={emailInputRef} type="text" placeholder='Email' />
        <InputForm ref={passwordInputRef} type="password" placeholder='Password' />
    </>

    const loginInputs =
        <>
            <InputForm ref={emailInputRef} type="text" placeholder='Email' />
            <InputForm ref={passwordInputRef} type="password" placeholder='Password' />
            <ButtonResetPassword />
        </>

    const resetPasswordInputs = <>
        <InputForm ref={emailInputRef} type="text" placeholder='Email' />
    </>

    return (
        <Card>
            <FormItself action="" onSubmit={handleSubmitForm}>
                {props.isLogin && loginInputs}
                {props.isSignUp || props.isAccount ? signUpInputs : null}
                {props.isResetPassword && resetPasswordInputs}
                <MainButton isForm>
                    {props.textButton}
                </MainButton>
            </FormItself>
        </Card>
    )
}

export default Form;