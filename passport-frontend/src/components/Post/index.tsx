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
			{console.log(props)}
		</Style.Post>
	)
}

export default Post