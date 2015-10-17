module.exports = function(dbLocation) {

  //var db = openFile(dbLocation);
  var db = {
    users: {
      'testUser': {
        posts: [
          'this is a post',
          'here is a rant!',
          'pointless fact about my day!'
        ]
      }
    }
  };

  return {
    addUser: addUser,
    addPost: addPost,
    getPosts: getPosts
  };

  function openFile() {

  }

  function persist() {

  }

  function addUser(username) {
    if (!db.users.hasOwnProperty(username)) {
      var posts = ['first post'];
      db.users[username] = {posts: posts};
      persist();
    } else {
      console.log('username already exists');
    }
  }

  function addPost(username, post) {
    if (!db.users.hasOwnProperty(username)) {
      console.log('user does not exist');
    } else {
      db.users[username].posts.push(post);
      persist();
    }
  }

  function getPosts(username) {
    if (db.users.hasOwnProperty(username)) {
      return db.users[username].posts;
    }
  }
};