const db = require("../config/db");

// function profileInfoGetModel() {
// 	return db.select("*").from("profile_info");
// }

function profileInfoGetModel() {
	return db.select("*").from("profile_info");
}

function getOneProfileInfoModel(id) {
	return db.select("*").from("profile_info").where({ id});
}

// function editProfileInfoModel(name, headline, email, id ) {
// 	// return db("profile_info")
// 	//        .update({name: name, headline: headline})
// 	//        .where("profile_id", id)
// 	//        .returning("*")

// 	return db.raw(`
//       UPDATE profile_info
//       SET name = ?, headline = ? 
//       FROM profiles 
//       WHERE profile_info.profile_id = profiles.id 
//         AND profiles.email = ?
//         AND profile_info.profile_id = ?
//       RETURNING *;
// 	`, [name, headline, email , id])

// }

function editProfileInfoModel(name, headline, id) {
    return db("profile_info")
            .update({name, headline})
            .where({profile_id: id})
            .returning("*")
}




module.exports = {
	profileInfoGetModel,
	editProfileInfoModel,
	getOneProfileInfoModel,
};
