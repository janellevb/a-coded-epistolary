// import React from 'react';
import styled from 'styled-components';
import {useState} from "react";
import {drag_icon} from "../utils/images.ts";

type clickCallback = () => void;

interface TextBankProps {
	callback: clickCallback,
}

const CurvedBox = styled.div<{$hideTextBank?: boolean}>`
  position: fixed;
  left: 50%;
  right: 0;
  bottom: 0;
	width: 70vw;
  height: 25vh;
  background-color: rgba(217, 217, 216, 0.8);
  overflow: hidden;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);
	border: 1px solid black;
  transform: translateY(${props => props.$hideTextBank ? 'calc(25vh - 39px)' : 0}) translateX(-50%);
  transition: 0.3s ease-out;
`;

const Content = styled.div`
  color: white;
  text-align: center;
`;

const TextBank = ({callback}: TextBankProps) => {
	const [hideTextBank, setHideTextBank] = useState<boolean>(true);
	return (
		<CurvedBox
			$hideTextBank={hideTextBank}
		>
			<Content>
				<div style={{
					width: '70vw',
					height: '39px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				 onClick={() => {
					 setHideTextBank(prevValue => !prevValue);
					 callback?.call(null)
				 }}
				>
					<img
						src={drag_icon}
						style={{
							scale: '62%'
						}}
					/>
				</div>
			</Content>
		</CurvedBox>
	);
}

export default TextBank;