var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var comicController = require('../controllers/comic'); //Making Object of Controllers


router.route('/user') // Route to Post and Get Data From and To Users Database
  .post(comicController.postuser)
  .get(comicController.getuser)
  
 
router.route('/season') // Route to Post and Get Data From and To Headings Database
   .post(comicController.postseason)
  .get(comicController.getseason)

router.route('/series') // Route to Post and Get Data From and To Headings Database
   .post(comicController.postseries)
  .get(comicController.getseries)
  
router.route('/comic') // Route to Post and Get Data From and To Comic Database
   .post(comicController.postcomic)
  .get(comicController.getcomic)
  
router.route('/user/:_id')
.put(comicController.updateuser)
 .delete(comicController.deleteuser);

 router.route('/comic/:Cm_Id')
 .put(comicController.updatecomic)
   .delete(comicController.deletecomic);

router.route('/season/:Sn_Id')
 .put(comicController.updateseason)
   .delete(comicController.deleteseason);

router.route('/series/:Sr_Id')
.put(comicController.updateseries)
   .delete(comicController.deleteseries);

router.route('/search/:reg')
   .get(comicController.SearchData);

router.route('/check')
  .post(comicController.checkuser);

module.exports = router; // Exporting router