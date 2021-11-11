import { Button } from './styles'
const PatternButton: React.FC<{ bgColor?: string, txColor?: string, gameButton?: boolean }> = (props) => {
    return (
        <Button gameButton={props.gameButton} bgColor={props.bgColor} txColor={props.txColor}>{props.children}</Button>
    )
}

export default PatternButton