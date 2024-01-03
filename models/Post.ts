class Post {
    id: number;
    content: string;
    postedBy: number; // user ID
  
    constructor(id: number, content: string, postedBy: number) {
      this.id = id;
      this.content = content;
      this.postedBy = postedBy;
    }
  }
  export default Post;