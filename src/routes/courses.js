const express = require('express');
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions)
router.post('/handle-trash-from-actions', courseController.handleTrashFormActions)
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.patch('/:id/restore', courseController.restore);
router.get('/:slug', courseController.show);

module.exports = router;