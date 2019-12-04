import styled from 'styled-components'
import { colours } from '../../utils/variables'

export const A = styled.div`
	width: 100%;
	max-width: ${props => props.size ? `${props.size}px` : '240px'};
	background-color: ${props => props.color ? props.color : 'green'};
	padding: 15px 20px;
	font-size: 1.1rem;
	color: ${colours.white};
	text-decoration: none;
	margin: 30px 0;

`