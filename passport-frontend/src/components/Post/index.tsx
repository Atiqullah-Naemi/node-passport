import React from 'react'
import * as Style from './style'
import Button from '../Button'
import { colours } from '../../utils/variables'

interface Props {
	title: string,
	content: string,
	image: any
}

const Post: React.SFC<Props> = (props) => {
	return (
		<Style.Post>
			<h3> {props.title} </h3>
			<img src={props.image.replace('public/', '')} alt={props.title} />
			<Button link='' color={colours.darkblue} size={200} />
		</Style.Post>
	)
}

export default Post