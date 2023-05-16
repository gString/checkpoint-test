import {ReactElement, useState} from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  width: 450px;
  height: 200px;
  border-radius: 20px;
  border: 2px solid green;
  text-align: right;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const TextInput = styled.input`
  width: 150px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px dotted grey;
  border-radius: 3px;
`;

const Label = styled.label`
    width: 70px;
  display: inline-block;
  text-align: right;
  padding: 0 15px;
  font-size: 15px;
  line-height: 32px;
`;

const Submit = styled.button`
  margin-right: 30px;
  margin-top: -12px;
  border: 1px dotted grey;

  &:disabled {
    opacity: .5;
    border-color: transparent;
  }
  
  &:hover {
    border: 1px solid white;
  }
`

type Props = {
    loginHandler: (user, pass) => Proimse<void>
}

export default function Login({loginHandler}: Props): ReactElement {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = evt => {
        evt.preventDefault();
        loginHandler(user, pass);
    }

    return (
        <LoginForm onSubmit={handleSubmit}>
            <InputWrapper>
                <Label htmlFor="username">Username </Label>
                <TextInput type="text"
                           name="username"
                           id="username"
                           onChange={e => setUser(e.target.value)}
                           required/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="pass">Password </Label>
                <TextInput type="password"
                           name="pass"
                           id="pass"
                           onChange={e => setPass(e.target.value)}
                           required/>
            </InputWrapper>
            <Submit type="submit" disabled={user.length < 3 || pass.length < 6}>Login</Submit>
        </LoginForm>
    );
}