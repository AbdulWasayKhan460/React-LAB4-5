import "../App.css";
function UserCard({user}){
return(
<div className="user-card">
<h3>{user.name}</h3>
<p>{user.rollno}</p>
<p>{user.email}</p>
</div>
)
}
export default UserCard
