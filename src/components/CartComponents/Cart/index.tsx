import Card from "../../UI/Card";
import CartItem from "../CartItem";
import emptyCartSvg from '../../../assets/img/empty-cart.png';
import { CartItemsArea, EmptyCartText, EmptyCartArea, EmptyCartImg, CartArea, ContainerCart, CartTitleText, TotalCartPrice, TotalCartText, AreaButtonSave } from './styles'
import MainButton from "../../UI/MainButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const convertToReal = (val: number) => {
    return val.toFixed(2).toString().replace('.', ',');
}

const Cart: React.FC = (props) => {
    const actualGame = useSelector((state: RootState) => state.game.actualGame)
    const items = useSelector((state: RootState) => state.cart.items);
    const totalPrice = convertToReal(useSelector((state: RootState) => state.cart.totalPrice));
    const cartItems = items.map((item) => <CartItem id={item.id} key={item.id} balls={item.numbers} gamePrice={convertToReal(actualGame.price)} gameType={actualGame.type} />)
    let emptyCart =
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
                        {cartItems.length !== 0 ? <TotalCartText>CART <TotalCartPrice>TOTAL: R$: {totalPrice}</TotalCartPrice></TotalCartText> : null}
                    </CartItemsArea>
                    <AreaButtonSave>
                        <MainButton onSave={() => console.log('save')}>Save</MainButton>
                    </AreaButtonSave>
                </ContainerCart>
            </Card>
        </CartArea>
    )
}

export default Cart;