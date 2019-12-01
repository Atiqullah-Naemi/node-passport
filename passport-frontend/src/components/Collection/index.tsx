import React from 'react'
import * as Style from './style'
import Post from '../Post'


interface Posts {
	title: string,
	content: string,
	image: any
}

interface Props {
	posts: Posts[]
}

const Collection: React.FC<Props> = (props) => {
	return (
		<Style.Collection>
			{props.posts.map((post, i) => {
				return (
					<Post key={i} {...post} />
				)
			})}
		</Style.Collection>
	)
}

export default Collection