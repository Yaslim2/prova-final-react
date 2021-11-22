import { userSvg } from "@assets/img";
import { Form } from "@AuthenticationComponents/index";
import { AccountContainer, FormArea, CircularDiv, UserImg, TextAccount } from './styles'
const AccountArea: React.FC = () => {

    return (
        <AccountContainer>
            <CircularDiv>
                <UserImg src={userSvg} />
            </CircularDiv>
            <TextAccount>Update Account</TextAccount>
            <FormArea>
                <Form textButton='Change' isAccount />
            </FormArea>
        </AccountContainer>)
}

export default AccountArea;