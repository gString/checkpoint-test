import {faker} from "@faker-js/faker";

export interface IPost {
    id: string;
    author: string;
    content: string;
    date: Date;
}

const createPost = ():IPost => {
    const author = faker.internet.userName();
    const date = faker.date.past({years: 1});
    return ({
        id: author+Date.parse(date.toString()),
        author,
        content: faker.lorem.paragraphs({min: 2, max: 8}, '\n'),
        date,
    })
}

const posts = (): IPost[] => {
    const postsNum = 7 + Math.floor(Math.random() * 5);
    return Array(postsNum).fill(null).map(() => createPost());
}

export const get_posts = () => {
    return new Promise((resolve) => {
        const _posts = posts();
        console.log('_posts',_posts);
        resolve(_posts);
    })

};