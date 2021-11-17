import { ActionButtonContainer, ShoppingCartImage } from './styles'
import shoppingCartSvg from '../../../assets/img/shopping-cart.svg'
const ActionButton: React.FC<{ onClear?: () => void, onAddToCart?: () => void, onComplete?: () => void }> = (props) => {
    const handleClick = () => {

        props.onComplete && props.onComplete();


        props.onClear && props.onClear();

        props.onAddToCart && props.onAddToCart();

    }
    return <ActionButtonContainer isAddToCart={!!props.onAddToCart} onClick={handleClick}>
        {!!props.onAddToCart && <ShoppingCartImage src={shoppingCartSvg} alt="" />}
        {props.children}
        <div />
    </ActionButtonContainer>
}

export default ActionButton;