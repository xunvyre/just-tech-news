const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) =>
{

});

router.post('/', (req, res) =>
{
    //check session
    if (req.session)
    {
        Comment.create
        ({
            comment_text: req.body.comment_text,
            //use user id from session
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then (dbCommentData => res.json(dbCommentData))
        .catch(err =>
        {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req, res) =>
{

});

module.exports = router;