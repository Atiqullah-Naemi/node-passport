import React from 'react'
import * as Style from './style'

interface Props {
	title: string,
	content: string,
	image: any
}

const Post: React.SFC<Props> = (props) => {
	return (
		<Style.Post>
			<h3> {props.title} </h3>
			<img src={props.image} alt={props.title} />
			<div>{props.content}</div>
		</Style.Post>
	)
}

export default Post