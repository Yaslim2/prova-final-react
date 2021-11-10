import { Button } from './styles'
const PatternButton: React.FC<{ bgColor?: string, txColor?: string }> = (props) => {
    return (
        <Button bgColor={props.bgColor} txColor={props.txColor}>{props.children}</Button>
    )
}

export default PatternButton