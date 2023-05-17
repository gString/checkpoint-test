import {ReactElement, useEffect, useMemo, useState} from "react";
import {get_posts, IPost} from "./fakeApi/get_posts";
import {
    ActionBar,
    ActionBtn,
    BlockingLayer,
    BoxTitle,
    FullText,
    ImagePlaceHolder,
    Modal,
    ModalTitle,
    PostBox,
    PostList,
    Text,
    User
} from "./Board.styles";
import NewPostForm from "./NewPostForm";
import {postPost} from "./fakeApi/postPost";

export default function Board(): ReactElement {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [addNew, setAddNew] = useState(false);
    const [selected, setSelected] = useState<IPost>(null)

    const getPostList = async () => {
        const list = await get_posts() as IPost[];
        setPosts(list);
    }

    useEffect(() => {
        const prevPosts = JSON.parse(localStorage.getItem('posts'));
        if (prevPosts && prevPosts.length) {
            setPosts(prevPosts)
        } else {
            getPostList();
        }
    }, []);

    useEffect(() => {
        if (posts.length) {
            localStorage.setItem('posts', JSON.stringify(posts));
        }
    }, [posts]);

    const orderedPosts = useMemo(() =>
        posts.length ? posts.sort((a, b) => new Date(b.date) - new Date(a.date)) : [], [posts]);

    const Post = ({post}) => {
        const {author, content} = post;
        return <PostBox onClick={() => setSelected(post)}><BoxTitle>{author}</BoxTitle><Text>{content}</Text></PostBox>
    }

    const CreateNew = () => {
        return <PostBox onClick={() => setAddNew(true)}>
            <BoxTitle>Create new post</BoxTitle>
        </PostBox>
    }

    const closeDisplayModal = () => setSelected(null);
    const deletePost = id => {
        setPosts(prevState => prevState.filter(post => post.id != id));
        closeDisplayModal();
    }
    const closeNewPostModal = () => setAddNew(false);
    const addPost = async (name, msg) => {
        const newPost = await postPost(name, msg) as IPost;
        setPosts(prevState => [...prevState, newPost]);
    }

    const DisplayPost = () => <BlockingLayer>
        <Modal>
            <ModalTitle>A note from <User>{selected.author}</User></ModalTitle>
            <FullText>{selected.content}</FullText>
            <ImagePlaceHolder/>
            <ActionBar><ActionBtn onClick={() => deletePost(selected.id)}>Delete</ActionBtn><ActionBtn onClick={closeDisplayModal}>Close</ActionBtn></ActionBar>
        </Modal>
    </BlockingLayer>


    return (
        <div>
            <h3>Welcome to the post board</h3>
            {
                orderedPosts.length ?
                    <PostList>
                        <CreateNew/>
                        {orderedPosts.map((post) =>
                            <Post key={post.id}
                                  post={post}/>)}
                    </PostList> : <h3>Loading ...</h3>}
            {selected && <DisplayPost/>}
            {addNew && <NewPostForm closeModal={closeNewPostModal} addPost={addPost}/>}
        </div>
    );
}