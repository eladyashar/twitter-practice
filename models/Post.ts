class Post {
    id: number;
    content: string;
    postedBy: number; // user ID
    // other properties
  
    constructor(id: number, content: string, postedBy: number) {
      this.id = id;
      this.content = content;
      this.postedBy = postedBy;
      // initialize other properties
    }
  
    // business logic methods
  }
  export default Post;