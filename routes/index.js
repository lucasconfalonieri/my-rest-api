const { Router } = require('express');
const router = Router();
 
router.get('/', (req, res) => {    
    res.json(
        {
            "message": "Hola mundo usando rutas!"
        }
    );
})
 
module.exports = router;