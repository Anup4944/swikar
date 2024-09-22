export default function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Role" />
        <input type="text" placeholder="Status" />
      </form>
    </div>
  );
}
