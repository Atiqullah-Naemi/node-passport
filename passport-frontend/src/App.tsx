import React, { useState, useEffect } from 'react'
import Collection from './components/Collection'
import { GlobalStyle } from './utils/globalStyle'
import Routes from './Routes'

const App: React.FC = () => {
	const [posts, setPosts] = useState([])


	useEffect(()=> {
		getPosts()
	}, [])

	const getPosts = async() => {
		const url = await fetch('/api/posts')
		const res = await url.json()

		setPosts(res.data)
	}

	return (
		<>
			<GlobalStyle />
			<Routes />
			<Collection posts={posts} />
		</>
	)
}

export default App
