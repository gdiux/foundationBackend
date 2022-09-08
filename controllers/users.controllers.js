const { response } = require('express');

/** ===============================================================
 * GET USERS
================================================================ */
const getUsers = async(req, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado, porfavor intente mas tarde'
        });
    }

};

// EXPORTS
module.exports = {
    getUsers
}