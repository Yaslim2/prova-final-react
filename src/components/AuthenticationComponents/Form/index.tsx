import { FormEvent, useRef } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { userActions } from '../../../store/userSlice'
import MainButton from '../../UI/MainButton'
import { InputForm, FormItself } from './styles'
import ButtonResetPassword from '../ButtonResetPassword'

import Card from '../../UI/Card'


const Form: React.FC<{
    textButton: string, isLogin?: boolean,
    isResetPassword?: boolean, isSignUp?: boolean
}> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { logIn, signUp } = userActions;
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const handleLogin = () => {
        const email = emailInputRef.current!.value;
        const password = passwordInputRef.current!.value;
        if (email.trim() === '') return;
        if (password.trim() === '') return;
        try {
            dispatch(logIn({ email, password }));
            history.push('/user/recent-games');
        } catch (e: any) {
            alert(e.message);
        }
    }

    const handleSignUp = () => {
        const name = nameInputRef.current!.value;
        const email = emailInputRef.current!.value;
        const password = passwordInputRef.current!.value;
        if (name.trim() === '') return;
        if (email.trim() === '') return;
        if (password.trim() === '') return;
        try {
            dispatch(signUp({ name, email, password }))
            history.push('/');
        } catch (e: any) {
            alert(e.message);
        }
    }

    const handleResetPassword = () => {
        console.log('reset password.')
    }

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        props.isLogin && handleLogin();
        props.isSignUp && handleSignUp();
        props.isResetPassword && handleResetPassword();
    }

    const signUpInputs = <>
        <InputForm ref={nameInputRef} type="text" placeholder='Name' />
        <InputForm ref={emailInputRef} type="text" placeholder='Email' />
        <InputForm ref={passwordInputRef} type="text" placeholder='Password' />
    </>

    const loginInputs =
        <>
            <InputForm ref={emailInputRef} type="text" placeholder='Email' />
            <InputForm ref={passwordInputRef} type="text" placeholder='Password' />
            <ButtonResetPassword />
        </>

    const resetPasswordInputs = <>
        <InputForm ref={emailInputRef} type="text" placeholder='Email' />
    </>

    return (
        <Card>
            <FormItself action="" onSubmit={handleSubmitForm}>
                {props.isLogin && loginInputs}
                {props.isSignUp && signUpInputs}
                {props.isResetPassword && resetPasswordInputs}
                <MainButton isForm>
                    {props.textButton}
                </MainButton>
            </FormItself>
        </Card>
    )
}

export default Form;