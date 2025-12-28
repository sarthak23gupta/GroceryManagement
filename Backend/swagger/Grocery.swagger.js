/**
 * @swagger
 * tags:
 *   name: Grocery
 *   description: Grocery management APIs
 */


/**
 * @swagger
 * /grocery/add:
 *   post:
 *     summary: Add a new grocery item
 *     tags: [Grocery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - item
 *               - quantity
 *               - units
 *               - group
 *               - user
 *             properties:
 *               item:
 *                 type: string
 *               quantity:
 *                 type: number
 *               units:
 *                 type: string
 *                 enum: [kg, gms, mgms]
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               group:
 *                 type: string
 *                 description: Group ID
 *               user:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Grocery added successfully
 *       400:
 *         description: Grocery not added or invalid data
 */


/**
 * @swagger
 * /grocery/getAllGrocery/{groupId}:
 *   get:
 *     summary: Get all grocery items by group ID
 *     tags: [Grocery]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Grocery items fetched successfully
 *       400:
 *         description: No groceries found for this group
 */



/**
 * @swagger
 * /grocery/getPickedTrueGrocery/{groupId}:
 *   get:
 *     summary: Get all grocery items where picked is true for a group
 *     tags: [Grocery]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Grocery items with picked=true fetched successfully
 *       400:
 *         description: No groceries found
 */



/**
 * @swagger
 * /grocery/getPickedFalseGrocery/{groupId}:
 *   get:
 *     summary: Get all grocery items where picked is false for a group
 *     tags: [Grocery]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Grocery items with picked=false fetched successfully
 *       400:
 *         description: No groceries found
 */

/**
 * @swagger
 * /grocery/get/{id}:
 *   get:
 *     summary: Get a grocery item by ID
 *     tags: [Grocery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Grocery ID
 *     responses:
 *       200:
 *         description: Grocery fetched successfully
 *       400:
 *         description: Grocery not found
 */


/**
 * @swagger
 * /grocery/get:
 *   get:
 *     summary: Get all grocery items
 *     tags: [Grocery]
 *     responses:
 *       200:
 *         description: All groceries fetched successfully
 *       400:
 *         description: No groceries available
 */


/**
 * @swagger
 * /grocery/togglePicked:
 *   put:
 *     summary: Toggle the picked status of a grocery item
 *     tags: [Grocery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *                 description: Grocery ID
 *     responses:
 *       200:
 *         description: Picked status toggled successfully
 *       400:
 *         description: Grocery not updated
 */


/**
 * @swagger
 * /grocery/update:
 *   put:
 *     summary: Update a grocery item
 *     tags: [Grocery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *               item:
 *                 type: string
 *               quantity:
 *                 type: number
 *               units:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Grocery updated successfully
 *       400:
 *         description: Grocery not updated
 */


/**
 * @swagger
 * /grocery/delete:
 *   delete:
 *     summary: Delete a grocery item
 *     tags: [Grocery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Grocery deleted successfully
 *       400:
 *         description: Grocery not deleted
 */
