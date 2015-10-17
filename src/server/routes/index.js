module.exports = function(app, db) {
    app.post('/api/addUser', addUser);
    app.post('/api/addPost', addPost);
    app.get('/api/getPosts', getPosts);

    function addUser(req, res, next) {
        var user = req.query.username;
        var response = 'cannot add';
        if (user !== undefined) {
            db.addUser(user);
            response = 'user added';
        }
        res.send(response);
    }

    function addPost(req, res, next) {
        var user = req.query.userid;
        var post = req.query.post;
        var response = 'cannot add';

        if (user !== undefined && post !== undefined) {
            db.addPost(user, post);
            response = 'post added!';
        }
        res.send(response);
    }

    function getPosts(req, res, next) {
        var user = req.query.userid;
        var posts;
        if (user !== undefined) {
            posts = db.getPosts(user);
        } else {
            posts = [];
        }
        res.send(posts);
    }
};