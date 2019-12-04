import React from 'react'
import * as Style from './style'

interface Props {
	link: string,
	size?: number,
	color?: string
}

const Button: React.SFC<Props> = (props) => {
	const { link = '', size = 240, color = '' } = props
	return (
		<Style.A as='a' href={link} size={size} color={color}>
			Continue Reading
		</Style.A>
	)
}

export default Button