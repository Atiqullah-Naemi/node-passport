import styled from 'styled-components'
import { colours } from '../../utils/variables'


export const Post = styled.div`
	display: flex;
	flex-direction: column;
	width: 30.333%;
	height: 100%;
	max-height: 420px;
	margin-right: 12px;
	margin-bottom: 50px;
	background-color: ${colours.lightgray};
	padding: 10px;
	border: 2px solid ${colours.white};

	&:last-child {
		margin-right: 0;
	}

	h3 {
		font-size: 1.4rem;
		font-weight: 300;
		min-height: 50px;
	}

	img {
		width: 100%;
		overflow: hidden;
	}
`