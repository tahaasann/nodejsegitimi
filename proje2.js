

const posts = [
    {no: "1. post", author: "1. Taha S. ASAN"},
    {no: "2. post", author: "2. Taha S. ASAN"},
    {no: "3. post", author: "3. Taha S. ASAN"},
    {no: "4. post", author: "4. Taha S. ASAN"},
    {no: "5. post", author: "5. Taha S. ASAN"},
    
];

const listPosts = () => {
    posts.map(post => {
        console.log(post);
    })
};

listPosts();

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        if(newPost){
            posts.push(newPost);
            resolve(newPost);
        }
        else{
            reject("..An error Has Occured");
        }
    })
    return promise1;
};

const showPosts = async () => {
    try{
        await addPost({no: "6. post", author: "6. Taha S. ASAN"});
        listPosts();
    }   catch(error){
        console.log(error);
    }
};

showPosts();