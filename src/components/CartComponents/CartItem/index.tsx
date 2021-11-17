import trashSvg from '../../../assets/img/trash.svg'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cartSlice'
import { GameTypeText, GamePriceText, ItemArea, DeleteArea, AfterImgTrash, ImgTrash, NumberGameText, DetailGameArea, DetailGameTextArea } from './styles'

const CartItem: React.FC<{ id: string, balls: number[], gameType: string, gamePrice: string }> = (props) => {
    const dispatch = useDispatch();
    const { removeFromCart } = cartActions
    const ordenedBalls = [...props.balls]
    ordenedBalls.sort((a: number, b: number) => a - b);
    const ballsArrayText = ordenedBalls.map((ball) => ball < 9 ? '0' + ball : ball);

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ id: props.id }));
    }
    return (
        <ItemArea>
            <DeleteArea onClick={handleRemoveFromCart}>
                <ImgTrash src={trashSvg} alt="" />
                <AfterImgTrash />
            </DeleteArea>
            <DetailGameArea>
                <NumberGameText>{ballsArrayText.join(', ')}</NumberGameText>
                <DetailGameTextArea>
                    <GameTypeText>{props.gameType}</GameTypeText>
                    <GamePriceText>R$ {props.gamePrice}</GamePriceText>
                </DetailGameTextArea>
            </DetailGameArea>
        </ItemArea>
    )
}

export default CartItem;