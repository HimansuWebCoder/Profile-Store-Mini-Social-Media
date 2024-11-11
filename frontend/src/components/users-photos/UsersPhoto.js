import "./UsersPhoto.css";
function UsersPhoto({img}) {
	return (
         <div className="users-photo-container">
         	<img src={img} alt={img} />
         </div>
		)
}

export default UsersPhoto;