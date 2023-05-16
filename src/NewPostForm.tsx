import {ReactElement, useState} from "react";
import styled from "styled-components";
import {ActionBar, ActionBtn, BlockingLayer, Modal, ModalTitle} from "./Board.styles";


const PostForm = styled.form`
  padding: 20px;
  
  ${ActionBar} {
    width: calc(100% - 20px);
  }
`;

const InputWrapper = styled.div`
  margin-top: 15px;
`;

const NameInput = styled.input`
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px dotted grey;
  border-radius: 3px;
  background-color: white;
  box-sizing: border-box;
  font-size: 13px;
  color: #213547;
`;

const PostText = styled.textarea`
  resize: none;
  width: 100%;
  height: 260px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px dotted grey;
  border-radius: 3px;
  background-color: white;
  box-sizing: border-box;
  color: #213547;
`;

type Props = {
    closeModal: () => void;
    addPost: (name: string, msg: string) => void;
}

export default function NewPostForm({closeModal, addPost}: Props): ReactElement {

    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const handleCancel = () => closeModal();
    const handlePost = evt => {
        console.log("post");
        evt.preventDefault();
        addPost(name, msg);
        closeModal();
    };

    return <BlockingLayer>
        <Modal>
            <ModalTitle>Post a new note</ModalTitle>
            <PostForm onSubmit={handlePost}>
                <InputWrapper>
                    <label>Your name</label>
                    <NameInput type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name here"/>
                </InputWrapper>
                <InputWrapper>
                    <label>What would you like to say?</label>
                    <PostText id="msg" name="msg" onChange={e => setMsg(e.target.value)} />
                </InputWrapper>
            <ActionBar>
                <ActionBtn onClick={handleCancel}>Cancel</ActionBtn>
                <ActionBtn
                    type="submit"
                    disabled={name.length < 3 || msg.length < 3}>
                    Post
                </ActionBtn>
            </ActionBar>
            </PostForm>
        </Modal>
    </BlockingLayer>
}