import { ActionButtonContainer, ShoppingCartImage } from './styles'
import shoppingCartSvg from '../../../assets/img/shopping-cart.svg'
const ActionButton: React.FC<{ isAddToCart?: boolean }> = (props) => {
    return <ActionButtonContainer isAddToCart={props.isAddToCart}>
        {props.isAddToCart && <ShoppingCartImage src={shoppingCartSvg} alt="" />}
        {props.children}
        <div />
    </ActionButtonContainer>
}

export default ActionButton;