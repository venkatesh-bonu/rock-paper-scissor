import React from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  CustomButton,
  ModalContainer,
  ModalCenterContainer,
  PopUpCloseButton,
  CloseButtonContainer,
  ModalImgContainer,
  ModalImg,
} from './styledComponents'

const RulesPopup = () => (
  <Popup trigger={<CustomButton>Rules</CustomButton>} modal nested>
    {close => (
      <ModalContainer>
        <ModalCenterContainer>
          <CloseButtonContainer>
            <PopUpCloseButton
              onClick={() => {
                close()
              }}
            >
              <RiCloseLine />
            </PopUpCloseButton>
          </CloseButtonContainer>
          <ModalImgContainer>
            <ModalImg
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            ></ModalImg>
          </ModalImgContainer>
        </ModalCenterContainer>
      </ModalContainer>
    )}
  </Popup>
)

export default RulesPopup

