const con = require("./db_connect");

//creating table for post
async function createTable() {
    let sql=`CREATE TABLE IF NOT EXISTS posts (
        postID INT NOT NULL AUTO_INCREMENT,
        postBox VARCHAR(1000) NOT NULL,
        userID INT NOT NULL,
        CONSTRAINT  postPK PRIMARY KEY (postID),
        CONSTRAINT post_FK FOREIGN KEY (userID) REFERENCES users(userID)
    ); `
    await con.query(sql);
  }
  createTable();
  
//crud operations

//create a postBox
async function createPost(post){

  //let create =await getPost(post);
    const sql =`INSERT INTO posts(postBox, userID)
    VALUES ("${post.postBox}", ${post.userID});`
 
    await con.query(sql);
  
}

//grabbing all posts in database
async function getAllPosts() {
    const sql = `SELECT * FROM posts;`;
    let posts = await con.query(sql);
    console.log(posts)
}

//updating postBoxs
async function editPost(post){
    let sql = `UPDATE posts
     SET postBox = "${post.postBox}"
     WHERE postID = ${post.postID}
     `;

     await con.query(sql);
     let updatedPost = await getPost(post);
     return updatedPost[0];
}

// deleting postbox
async function deletePost(post){
    let sql = `DELETE FROM posts
     WHERE postID = ${post.postID}
     `
     await con.query(sql);
}

//useful function
async function getPost(post) {
    let sql;
    if(post.userID) {
      sql = `
        SELECT * FROM posts
         WHERE userID = ${post.userID};
      `;
    }
    else{
      sql = `select * from posts where postID = ${post.postID}`;
    }
    return await con.query(sql);  
  }

module.exports = {createPost, getPost, editPost, deletePost, getAllPosts}