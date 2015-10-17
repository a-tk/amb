module.exports = function(dbLocation) {

  //var db = openFile(dbLocation);
  var db = {
    users: [
      {
        id: 0,
        username: 'testUser',
        posts: [
          {
            id: 0,
            timestamp: 0,
            post: 'test1'
          },
          {
            id: 1,
            timestamp: 1,
            post: 'something'
          },
          {
            id: 2,
            timestamp: 2,
            post: 'rant!!'
          }
        ]
      }
    ]
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
    var id = db.users.length;
    var timestamp = Date.now();
    var user = {
      id: id,
      username: username,
      posts: [
        {
          id: 0,
          timestamp: timestamp,
          post: 'User Created'
        }
      ]
    };
    db.users.push(user);
    persist();
  }

  function addPost(userid, post) {
    var timestamp = Date.now();
    var index = db.users[userid].posts.length;
    var post = {
      id: index,
      timestamp: timestamp,
      post: post
    };
    db.users[userid].posts.push(post);
    persist();
  }

  function getPosts(userid) {
    return db.users[userid].posts;
  }
};