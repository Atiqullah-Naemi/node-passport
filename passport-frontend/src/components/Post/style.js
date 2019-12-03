import styled from 'styled-components'
import { breakpoints } from '../../utils/variables'


export const Post = styled.div`
	display: flex;
	flex-direction: column;
	width: 33.333%;
	margin-right: 15px;

	&:last-child {
		margin-right: 0;
	}

	h3 {
		font-size: 1.4rem;
		font-weight: 300;
	}

	img {
		width: 100%;
		overflow: hidden;
	}
`