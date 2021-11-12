import { ActionButtonContainer } from './styles'
import shopCartSvg from '../../../assets/img/shopping-cart.svg'
const ActionButton: React.FC<{ isAddToCart?: boolean }> = (props) => {
    return <ActionButtonContainer isAddToCart={props.isAddToCart}>
        {props.isAddToCart && <img src={shopCartSvg} alt="" />}
        {props.children}
        <div />
    </ActionButtonContainer>
}

export default ActionButton;