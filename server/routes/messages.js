const express = require("express");
const router = express.Router({mergeParams: true});
const { createMessage, fetchMessage, deleteMessage} = require("../handlers/messages");

router.route("/").post(createMessage);

router.route("/:message_id")
      .route(fetchMessage)
      .delete(deleteMessage);

module.exports = router;
