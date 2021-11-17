import Card from "../../UI/Card";
import { useHistory } from "react-router";
import CartItem from "../CartItem";
import emptyCartSvg from '../../../assets/img/empty-cart.png';
import { CartItemsArea, EmptyCartText, EmptyCartArea, EmptyCartImg, CartArea, ContainerCart, CartTitleText, TotalCartPrice, TotalCartText, AreaButtonSave } from './styles'
import MainButton from "../../UI/MainButton";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store/userSlice";
import { cartActions } from "../../../store/cartSlice";
import { RootState } from "../../../store";
import { convertToReal } from '../../../auxiliarFunctions/index'
import { gameActions } from "../../../store/gameSlice";

interface Game {
    numbersSelected: number[];
    date: string;
    price: number;
    type: string;
    color: string;
}

const Cart: React.FC = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { clearCart } = cartActions
    const { resetGame } = gameActions
    const { saveGame } = userActions;
    const minValue = useSelector((state: RootState) => state.game.minValue)
    const items = useSelector((state: RootState) => state.cart.items);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const cartItems = items.map((item) => <CartItem mainColor={item.mainColor} id={item.id} key={item.id} balls={item.numbers} gamePrice={convertToReal(item.gamePrice)} gameType={item.gameType} />)
    const handleSaveGame = () => {
        if (totalPrice < minValue) {
            alert('Valor mínimo de aposta de ' + minValue + '!');
            return;
        }
        const gameItems: Game[] = items.map((item) => {
            return {
                numbersSelected: item.numbers,
                date: new Date().toLocaleDateString('pt-BR'),
                price: item.gamePrice,
                type: item.gameType,
                color: item.mainColor
            }
        })
        dispatch(saveGame({ games: gameItems }));
        dispatch(clearCart());
        dispatch(resetGame());
        history.push('/user/recent-games');
    }
    const emptyCart =
        <EmptyCartArea>
            <EmptyCartImg src={emptyCartSvg} alt="" />
            <EmptyCartText>Sem itens no seu carrinho...</EmptyCartText>
        </EmptyCartArea>
    return (
        <CartArea>
            <Card>
                <ContainerCart>
                    <CartItemsArea>
                        <CartTitleText>CART</CartTitleText>
                        {cartItems.length === 0 ? emptyCart : cartItems}
                        {cartItems.length !== 0 ? <TotalCartText>CART <TotalCartPrice>TOTAL: R$: {convertToReal(totalPrice)}</TotalCartPrice></TotalCartText> : null}
                    </CartItemsArea>
                    {cartItems.length !== 0 ? (
                        <AreaButtonSave>
                            <MainButton onSave={handleSaveGame}>Save</MainButton>
                        </AreaButtonSave>
                    ) : null}
                </ContainerCart>
            </Card>
        </CartArea>
    )
}

export default Cart;