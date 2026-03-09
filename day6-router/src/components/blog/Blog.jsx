import { useEffect, useState } from "react";
import Navbar from "../Navbar";

export default function Blog() {
  const [blogs, setBlogs] = useState(() => {
    const stored = localStorage.getItem("blogs");
    return stored ? JSON.parse(stored) : [];
  });
  const [showForm, setShowForm] = useState(false);

  //edit
  const [editId, setEditId] = useState(null);
  const handleEdit = (blog) => {
    setForm({
      title: blog.title,
      category: blog.category,
      description: blog.description,
    });

    setEditId(blog.id);
    setShowForm(true);
  };

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
  });

  // localStorage
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    if (!form.title || !form.category || !form.description) {
      alert("Please fill all fields");
      return;
    }

    if (editId !== null) {
      // Update
      const updated = blogs.map((blog) =>
        blog.id === editId ? { ...blog, ...form } : blog,
      );
      setBlogs(updated);
      setEditId(null);
    } else {
      // Create blog
      setBlogs([...blogs, { ...form, id: Date.now() }]);
    }

    setForm({ title: "", category: "", description: "" });
    setShowForm(false);
  };
  // delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure comfirm delete this blog?",
    );

    if (confirmDelete) {
      setBlogs((delBlog) => delBlog.filter((blog) => blog.id !== id));
    }
  };
  return (
    <>
  <title>Portfolio -blogs</title>
  <div>  <Navbar /></div>
      <div className="min-h-screen p-8 mt-15 bg-slate-900 dark:bg-slate-200">
          
        <div className="max-w-3xl mx-auto">
          {/* header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-slate-200 dark:text-black">My Blogs</h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-sky-400 font-bold text-white px-4 py-2 rounded-lg hover:bg-sky-800">
              Create Blog
            </button>
          </div>

          {/* form */}
          {showForm && (
            <div className="bg-slate-600 shadow-lg rounded-xl p-8 max-w-lg mx-auto border border-gray-500 my-10 space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Blog Title"
                value={form.title}
                onChange={handleChange}
                className="w-full border border-gray-700 p-2 rounded bg-white/90 outline-none  "
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-700 p-2 rounded bg-white/90 outline-none"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border border-gray-700 p-2 rounded bg-white/90 outline-none"></textarea>

              <button
                onClick={handleCreate}
                className="w-full  bg-purple-600 text-white px-4 py-2 rounded-lg">
                {editId ? "Update Blog" : "Publish Blog"}
              </button>
            </div>
          )}

          {/*blogs */}
          <div className="space-y-4">
            {blogs.length === 0 && (
              <div className="text-center text-gray-400 py-10 dark:text-gray-800">
                No Blogs Available
              </div>
            )}
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-5 rounded-xl shadow flex justify-between items-center dark:bg-gray-900">
                <div>
                  <h2 className="text-xl font-bold dark:text-white capitalize">{blog.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{blog.category}</p>
                  <p className="mt-2 text-gray-700 dark:text-white capitalize">{blog.description}</p>
                </div>
                <div className="space-x-4">
                  <button
                    className="border px-4 py-1 rounded-xl bg-sky-400 border-sky-600 hover:scale-105 "
                    onClick={() => handleEdit(blog)}>
                    Edit
                  </button>
                  <button
                    className="border px-4 py-1 rounded-xl bg-red-300  border-red-600 hover:scale-105"
                    onClick={() => handleDelete(blog.id)}>
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
