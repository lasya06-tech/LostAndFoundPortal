const express = require("express");
const router = express.Router();

const itemcontroller = require("../controllers/reportLost");
const { protect } = require("../middleware/authMiddleware");

router.post("/report-lost", protect, itemcontroller.reportLostItem);

router.get("/lost-items", itemcontroller.getAllLostItems);

router.get("/my-reports", protect, itemcontroller.getMyReports);


router.get("/lost-items/:title", itemcontroller.getLostItemByName);

module.exports = router;