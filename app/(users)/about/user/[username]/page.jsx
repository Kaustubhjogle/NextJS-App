const UserDetails = async (props) => {
  console.log(props);
  const paramData = await props.params;
  console.log(paramData);
  return (
    <div className="flex flex-col items-center">
      <h1>User Info Page</h1>
      <div className="m-2">User: {paramData.username}</div>
    </div>
  );
};
export default UserDetails;
