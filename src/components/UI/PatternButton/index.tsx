import React from 'react'
import { Button } from './styles'
import { PatternButtonProps } from './types';
const PatternButton: React.FC<PatternButtonProps> = (props) => {
    const handleClick = (event: React.MouseEvent) => {
        props.onFilter && props.onFilter(event);
        props.onSelect && props.onSelect(event);
    }
    return (
        <Button onClick={handleClick} gameButton={props.gameButton} isActive={props.isActive} activeColor={props.color}>{props.children}</Button>
    )
}

export default PatternButton