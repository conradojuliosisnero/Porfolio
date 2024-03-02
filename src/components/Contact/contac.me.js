import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
    width: 550px;
	min-width: 350px;
	background-color: #dbdbdb;
	padding: 20px;
	border-radius: 10px;
	position: relative;

	.message {
		color: #355891;
		font-size: 14px;
	}

	.flex {
		display: flex;
        flex-direction:column;
		width: 100%;
		gap: 20px;
	}

	label {
		position: relative;
	}

	.input {
		width: 100%;
		padding: 10px 10px 20px 10px;
		outline: 0;
		border: 1px solid #ffffff;
		border-radius: 5px;

		+ span {
			position: absolute;
			left: 10px;
			top: 15px;
			color: #333333;
			font-size: 0.9em;
			cursor: text;
			transition: 0.3s ease;
		}

		&:placeholder-shown + span {
			top: 15px;
			font-size: 0.9em;
		}

		&:focus + span,
		&:valid + span {
			top: 30px;
			font-size: 0.7em;
			font-weight: 600;
		}

		&:valid + span {
			color: green;
		}
	}

	.input01 {
		width: 100%;
		padding: 10px 10px 20px 10px;
		outline: 0;
		border: 1px solid #355891;
		border-radius: 5px;

		+ span {
			position: absolute;
			left: 10px;
			top: 50px;
			color: #355891;
			font-size: 0.9em;
			cursor: text;
			transition: 0.3s ease;
		}

		&:placeholder-shown + span {
			top: 40px;
			font-size: 0.9em;
		}

		&:focus + span,
		&:valid + span {
			top: 50px;
			font-size: 0.7em;
			font-weight: 600;
		}

		&:valid + span {
			color: green;
		}
	}

	.fancy {
		background-color: white;
		border: 2px solid #000000;
		border-radius: 0px;
		box-sizing: border-box;
		color: #355891;
		cursor: pointer;
		display: inline-block;
		font-weight: 390;
		letter-spacing: 2px;
		margin: 0;
		outline: none;
		overflow: visible;
		padding: 8px 30px;
		position: relative;
		text-align: center;
		text-decoration: none;
		text-transform: none;
		transition: all 0.3s ease-in-out;
		user-select: none;
		font-size: 13px;

		&::before {
			content: " ";
			width: 1.7rem;
			height: 2px;
			background: #333333;
			top: 50%;
			left: 1.5em;
			position: absolute;
			transform: translateY(-50%);
			transform: translateX(230%);
			transform-origin: center;
			transition: background 0.3s linear, width 0.3s linear;
		}

		.text {
			font-size: 1.125em;
			line-height: 1.33333em;
			padding-left: 2em;
			display: block;
			text-align: left;
			transition: all 0.3s ease-in-out;
			text-transform: lowercase;
			text-decoration: none;
			color: #333333;
			transform: translateX(30%);
		}

		.top-key {
			height: 2px;
			width: 1.5625rem;
			top: -2px;
			left: 0.625rem;
			position: absolute;
			background: #355891;
			transition: width 0.5s ease-out, left 0.3s ease-out;
		}

		.bottom-key-1 {
			height: 2px;
			width: 1.5625rem;
			right: 1.875rem;
			bottom: -2px;
			position: absolute;
			background: #355891;
			transition: width 0.5s ease-out, right 0.3s ease-out;
		}

		.bottom-key-2 {
			height: 2px;
			width: 0.625rem;
			right: 0.625rem;
			bottom: -2px;
			position: absolute;
			background: #355891;
			transition: width 0.5s ease-out, right 0.3s ease-out;
		}

		&:hover {
			color: #96ffb5;
			background: #96ffb5;

			&::before {
				width: 1.5rem;
				background: #355891;
			}

			.text {
				color: white;
				padding-left: 1.5em;
			}

			.top-key {
				left: -2px;
				width: 0px;
			}

			.bottom-key-1,
			.bottom-key-2 {
				right: 0;
				width: 0;
			}
		}
	}
`

export default Form;
