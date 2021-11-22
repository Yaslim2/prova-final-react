import { trashSvg } from '@assets/img'
import { useDispatch } from 'react-redux'
import { cartActions } from '@store/cartSlice'
import {
    GameTypeText, GamePriceText, ItemArea, DeleteArea,
    AfterImgTrash, ImgTrash, NumberGameText, DetailGameArea, DetailGameTextArea
} from './styles'
import { CartItemProps } from './types'

const CartItem: React.FC<CartItemProps> = (props) => {
    const dispatch = useDispatch();
    const { removeFromCart } = cartActions
    const ballsArrayText = props.balls.map((ball) => ball <= 9 ? '0' + ball : ball);

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ id: props.id }));
    }
    return (
        <ItemArea>
            <DeleteArea onClick={handleRemoveFromCart}>
                <ImgTrash src={trashSvg} alt="" />
                <AfterImgTrash bgColor={props.mainColor} />
            </DeleteArea>
            <DetailGameArea>
                <NumberGameText>{ballsArrayText.join(', ')}</NumberGameText>
                <DetailGameTextArea>
                    <GameTypeText colorText={props.mainColor}>{props.gameType}</GameTypeText>
                    <GamePriceText>R$ {props.gamePrice}</GamePriceText>
                </DetailGameTextArea>
            </DetailGameArea>
        </ItemArea>
    )
}

export default CartItem;