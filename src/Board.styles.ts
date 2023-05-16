import styled from "styled-components";

export const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1600px;
`;
export const PostBox = styled.div`
  height: 200px;
  flex: 1 1 auto;
  border: 1px dotted darkslategrey;
  border-radius: 10px;
  padding: 5px 10px;
  position: relative;
  box-sizing: border-box;
  margin: 10px 0.5%;

  @media screen and (min-width: 1200px) {
    flex-basis: 24%;
    max-width: 24%;
  }
  @media screen and (min-width: 900px) and (max-width: 1199px) {
    flex-basis: 32%;
    max-width: 32%;
  }
  @media screen and (min-width: 500px) and (max-width: 899px) {
    flex-basis: 49%;
    max-width: 49%;
  }
  @media screen and (max-width: 499px) {
    flex-basis: 100%;
  }
`;
export const BoxTitle = styled.h5`
  position: absolute;
  background-color: #242424;
  padding: 0 15px;
  top: -32px;
  left: 15px;
`;
export const Text = styled.p`
  font-size: 13px;
  padding: 5px 20px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const BlockingLayer = styled.div`
  position: fixed;
  background-color: #213547aa;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  height: 500px;
  width: 550px;
  background-color: white;
  color: darkslategrey;
  text-align: left;
  position: relative;
`;
export const ModalTitle = styled.h5`
  width: 100%;
  border-bottom: 1px dotted darkslategrey;
  margin: 0;
  padding: 5px;
  box-sizing: border-box;
`;
export const User = styled.span`
  color: #535bf2;
  text-decoration: underline;
`;
export const FullText = styled.p`
  width: 100%;
  height: 250px;
  padding: 0 20px;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  font-size: 13px;
  overflow-y: scroll;
  white-space: pre-wrap;
`;
export const ImagePlaceHolder = styled.div`
  height: 110px;
  margin: 20px;
  background-color: #ccc;
`;
export const ActionBar = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ActionBtn = styled.button`
  height: 40px;
  width: 100px;
  text-align: center;
  border: 1px dotted grey;
  margin-left: 10px;

  &:hover {
    border: 1px solid white;
  }
`