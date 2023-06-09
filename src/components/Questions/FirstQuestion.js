import React, { useState } from "react";
import styled from "styled-components";
const Section = styled.section`
  &:nth-of-type(1) {
    height: 20%;
    margin-top: 90px;
    @media (min-width: 669px) {
      margin-top: 180px;
    }
    @media (min-width: 1500px) {
      margin-top: 100px;
    }
  }
  &:nth-of-type(2) {
    margin-top: 15px;
    @media (min-width: 669px) {
      margin-top: 150px;
    }
    @media (min-width: 1500px) {
      margin-top: 50px;
    }
    div {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

const Paragraph = styled.p`
  text-align: center;
  &:first-child {
    font-weight: bold;
    color: #363944;
    font-size: 1.4rem;
    line-height: 2rem;
    @media (min-width: 669px) {
      font-size: 2.4rem;
      line-height: 3rem;
    }
    @media (min-width: 2000px) {
      font-size: 3.4rem;
      line-height: 4.5rem;
    }
  }
  &:nth-child(2) {
    color: #76757b;
    line-height: 1.4rem;
    margin-top: 10px;
    font-weight: bold;
    @media (min-width: 669px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    @media (min-width: 2000px) {
      font-size: 2.2rem;
      line-height: 3rem;
    }
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  img {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  @media (min-width: 669px) {
    height: 200px;
    img {
      width: 140px;
      height: 140px;
      cursor: pointer;
    }
    span {
      font-size: 1.2em;
    }
  }
  @media (min-width: 1500px) {
    img {
      width: 160px;
      height: 160px;
    }
  }
  span {
    font-weight: bold;
    margin-top: 15px;
  }
  .select {
    color: rgb(0, 122, 255);
  }
`;

const FirstQuestion = ({ onAddHoby, onValidate }) => {
  const [selectHoby, setSelectHoby] = useState();
  const onClick = (hoby) => {
    setSelectHoby(hoby);
    onValidate(hoby);
    onAddHoby(1, hoby);
  };
  return (
    <React.Fragment>
      <Section>
        <Paragraph>
          가고 싶은 도시를
          <br />
          골라보세요
        </Paragraph>
        <Paragraph>
          누군가와 함께 가보고
          <br />
          싶은 도시를 알려주세요.
        </Paragraph>
      </Section>
      <Section>
        <div>
          <ImageWrapper>
            <img
              src={require("../../images/city/city_image_01.png")}
              onClick={() => onClick("뉴욕")}
            />
            <span className={selectHoby === "뉴욕" ? "select" : ""}>뉴욕</span>
          </ImageWrapper>
          <ImageWrapper>
            <img
              src={require("../../images/city/city_image_02.png")}
              onClick={() => onClick("파리")}
            />
            <span className={selectHoby === "파리" ? "select" : ""}>파리</span>
          </ImageWrapper>
          <ImageWrapper>
            <img
              src={require("../../images/city/city_image_03.png")}
              onClick={() => onClick("하와이")}
            />
            <span className={selectHoby === "하와이" ? "select" : ""}>
              하와이
            </span>
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <img
              src={require("../../images/city/city_image_04.png")}
              onClick={() => onClick("도쿄")}
            />
            <span className={selectHoby === "도쿄" ? "select" : ""}>도쿄</span>
          </ImageWrapper>
          <ImageWrapper>
            <img
              src={require("../../images/city/city_image_05.png")}
              onClick={() => onClick("제주도")}
            />
            <span className={selectHoby === "제주도" ? "select" : ""}>
              제주도
            </span>
          </ImageWrapper>
          <ImageWrapper>
            <img
              src={require("../../images/city/city_image_06.png")}
              onClick={() => onClick("홍콩")}
            />
            <span className={selectHoby === "홍콩" ? "select" : ""}>홍콩</span>
          </ImageWrapper>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default FirstQuestion;
