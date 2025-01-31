import React from "react";
import styled from "styled-components";

const Item = styled.div`
  margin: 0.2rem 1rem;
  overflow: hidden;
  padding-top: 5px;
  cursor: pointer;
`;

const ItemMedia = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  transition: all 0.2s;
  ${Item}:hover & {
    transform: translateY(-2%);
  }
`;

const ImageShadow = styled.img`
  position: absolute;
  top: 15px;
  left: 0;
  filter: blur(24px);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transform: scale(0.85);
`;

const Title = styled.h3`
  color: #050938;
  font-weight: 600;
  text-transform: capitalize;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  line-height: 1;
  height: 2.5rem;
  font-size: 1.2rem;
  margin-bottom: 0;
`;

const Time = styled.p`
  text-transform: capitalize;
  color: #4a4a4a;
  font-size: 13px;
`;

export default function MovieItem(props) {
  const { movie } = props;
  return (
    <Item>
      <ItemMedia>
        <Image src={movie.hinhAnh} alt={movie.tenPhim}></Image>
        <ImageShadow src={movie.hinhAnh} alt={movie.tenPhim}></ImageShadow>
      </ItemMedia>
      <Title>{movie.tenPhim}</Title>
      <Time>{movie.danhGia}</Time>
    </Item>
  );
}
