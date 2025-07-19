const ServerComponent = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const response = await fetch(url);
  const data = await response.json();
  return (
    <div className="flex items-center flex-col">
      <h2>API Call in Server Component</h2>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {item.id} : {item?.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServerComponent;
