
export const postPost = (name: string, msg: string) => {
        return new Promise((resolve) => {
            const date = Date.now();
            const id = name+Date.parse(date.toString());
            const post = {
                id,
                author: name,
                content: msg,
                date,
            }
            resolve(post);
        })
};
