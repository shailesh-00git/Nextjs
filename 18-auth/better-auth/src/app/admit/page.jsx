import { createPost } from "../actions/postActions";
const Admit = () => {
  return (
    <div>
      <form action={createPost}>
        <input type="number" name="id" placeholder="id" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="password" />
        <input type="text" name="address" placeholder="Address" />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Admit;
