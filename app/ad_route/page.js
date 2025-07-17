'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const router = useRouter();

  const defaultBlogs = [
    {
      title: 'Naruto Shippuden',
      slug: 'naruto-shippuden',
      image: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      description: 'Naruto follows his path to become the strongest ninja and protect his friends.',
    },
    {
      title: 'One Piece',
      slug: 'one-piece',
      image: 'https://areajugones.sport.es/wp-content/uploads/2019/09/OnePiecePoster.jpg',
      description: 'Luffy sails to become the Pirate King and find the legendary One Piece treasure.',
    },
    {
      title: 'Attack on Titan',
      slug: 'attack-on-titan',
      image: 'https://www.toonamisquad.com/wp-content/uploads/2019/02/Attack-On-Titan-S1.jpg',
      description: 'Eren fights to uncover the secrets behind the Titans who destroyed his home.',
    },
    {
      title: 'Death Note',
      slug: 'death-note',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg',
      description: 'A high school student gains the power to kill by writing names in a mysterious notebook.',
    },
    {
      title: 'Demon Slayer',
      slug: 'demon-slayer',
      image: 'https://wallpapers.com/images/featured/demon-slayer-anime-vy37autfo82jvft7.jpg',
      description: 'Tanjiro sets out to save his sister and destroy the demon threat.',
    },
    {
      title: 'My Hero Academia',
      slug: 'my-hero-academia',
      image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974721559/my-hero-academia-team-up-missions-vol-1-9781974721559_hr.jpg',
      description: 'Izuku Midoriya dreams of becoming a superhero in a world where powers are common.',
    },
    {
      title: 'Jujutsu Kaisen',
      slug: 'jujutsu-kaisen',
      image: 'https://tse1.mm.bing.net/th/id/OIP.JTGPeEsGhfvgUOgSmF9aOAHaEK?pid=Api&P=0&h=180',
      description: 'Yuji Itadori joins a secret organization to fight cursed spirits and demons.',
    },
    {
      title: 'Tokyo Ghoul',
      slug: 'tokyo-ghoul',
      image: 'https://www.pixelstalk.net/wp-content/uploads/images6/Tokyo-Ghoul-Desktop-Background.jpg',
      description: 'Ken Kaneki struggles with his new identity as a half-human, half-ghoul.',
    },
    {
      title: 'Bleach',
      slug: 'bleach',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png',
      description: 'Ichigo gains the powers of a Soul Reaper to protect the living and the dead.',
    },
    {
      title: 'Dragon Ball Z',
      slug: 'dragon-ball-z',
      image: 'https://tse1.mm.bing.net/th/id/OIP.tfQt7tXMKi60enn-3IuG8AHaHa?pid=Api&P=0&h=180',
      description: 'Goku defends Earth from powerful villains with his Super Saiyan strength.',
    },
    {
      title: 'Fairy Tail',
      slug: 'fairy-tail',
      image: 'https://static.zerochan.net/FAIRY.TAIL.full.1128000.jpg',
      description: 'Natsu and his friends from Fairy Tail guild take on magical adventures.',
    },
    {
      title: 'Sword Art Online',
      slug: 'sword-art-online',
      image: 'https://static.animecorner.me/2024/11/1730959137-0fa928ee563e1a6ca831457f136db3ff.jpg',
      description: 'Players trapped in a virtual MMORPG must fight to survive.',
    },
    {
      title: 'Black Clover',
      slug: 'black-clover',
      image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7413f0c3e7bf7c2bd635d1e545be651b343d93d3e6cc60e9f8e00308b8b4a1ac._RI_V_TTW_.jpg',
      description: 'Asta, born without magic, vows to become the Wizard King.',
    },
    {
      title: 'Fullmetal Alchemist',
      slug: 'fullmetal-alchemist',
      image: 'https://tse3.mm.bing.net/th/id/OIP.kL3hphWx_8-p4GzzyjhxwgHaFj?pid=Api&P=0&w=300&h=300',
      description: 'Two brothers use alchemy in their quest to recover what they lost.',
    },
    {
      title: 'Haikyuu!!',
      slug: 'haikyuu',
      image: 'https://tse2.mm.bing.net/th/id/OIP.ctR9sMJmL0aq3iQoWYXBRQHaLH?pid=Api&P=0&h=180',
      description: 'Hinata aims to be the best volleyball player despite his small height.',
    },
  ];
  const [editIndex, setEditIndex] = useState(null);
  const [blogs, setBlogs] = useState(defaultBlogs);
  const [newBlog, setNewBlog] = useState({
    title: '',
    slug: '',
    image: '',
    description: '',
  });

  const handleLogout = () => {
    router.push('/');
  };

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.slug && newBlog.image && newBlog.description) {
      setBlogs([...blogs, newBlog]);
      setNewBlog({ title: '', slug: '', image: '', description: '' });
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewBlog({ ...blogs[index] });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.slug && newBlog.image && newBlog.description) {
      const updatedBlogs = [...blogs];
      updatedBlogs[editIndex] = newBlog;
      setBlogs(updatedBlogs);
      setEditIndex(null);
      setNewBlog({ title: '', slug: '', image: '', description: '' });
    }
  };

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <section className="add-blog-section">
        <h2>{editIndex !== null ? 'Edit Blog' : 'Add New Blog'}</h2>
        <form onSubmit={editIndex !== null ? handleSaveEdit : handleAddBlog} className="add-blog-form">
          <input type="text" name="title" placeholder="Title" value={newBlog.title} onChange={handleChange} required />
          <input type="text" name="slug" placeholder="Slug" value={newBlog.slug} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={newBlog.image} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={newBlog.description} onChange={handleChange} required />
          <button type="submit">{editIndex !== null ? 'Save Changes' : 'Add Blog'}</button>
          {editIndex !== null && <button type="button" onClick={() => setEditIndex(null)}>Cancel</button>}
        </form>
      </section>

      <section className="blog-list-section">
        <h2>Blog List</h2>
        <table className="blog-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={index}>
                <td><img src={blog.image} alt={blog.title} className="blog-img" /></td>
                <td>{blog.title}</td>
                <td>{blog.slug}</td>
                <td>{blog.description}</td>
                <td className='edit-delete'>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminPage;