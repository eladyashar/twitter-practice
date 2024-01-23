class Post {
    id: number | null;
    title: string;
    content: string;
    postedBy: number; // user ID
  
    constructor(id: number | null , title: string, content: string, postedBy: number) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.postedBy = postedBy;
    }
  }
  export default Post;