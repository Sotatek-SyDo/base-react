const MyAccount = () => {
  return <div>My Account <p>CLIENT = {import.meta.env.VITE_CLIENT ?? "default"}</p></div>;
};

export default MyAccount;
