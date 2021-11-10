import { CardWrapper } from "./styles"

const Card: React.FC = (props) => {
    return <CardWrapper>{props.children}</CardWrapper>
}
export default Card