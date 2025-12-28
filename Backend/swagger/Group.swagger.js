
/**
 * @swagger
 * tags:
 *   name: Group
 *   description: Group management APIs
 */

/**
 * @swagger
 * /group/add:
 *   post:
 *     summary: Create a new group
 *     tags: [Group]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - user
 *             properties:
 *               name:
 *                 type: string
 *               user:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Group created successfully
 *       400:
 *         description: Name or user missing
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /group/getAllGroup/{userId}:
 *   get:
 *     summary: Get all groups by user ID
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Groups fetched successfully
 *       400:
 *         description: No groups found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /group/get/{id}:
 *   get:
 *     summary: Get group by ID
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Group fetched successfully
 *       400:
 *         description: Group not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /group/getAll:
 *   get:
 *     summary: Get all groups
 *     tags: [Group]
 *     responses:
 *       200:
 *         description: All groups fetched successfully
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /group/updateGroupName:
 *   put:
 *     summary: Update group name
 *     tags: [Group]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Group name updated successfully
 *       400:
 *         description: Group not updated
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /group/delete/{id}:
 *   delete:
 *     summary: Delete group by ID
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Group deleted successfully
 *       400:
 *         description: Group not deleted
 *       500:
 *         description: Server error
 */