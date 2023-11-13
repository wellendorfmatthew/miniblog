import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './pages/Navigation'
import Modal from './pages/Modal'
import { firebase } from './firebase'
import { addDoc, collection, getFirestore, onSnapshot, orderBy, serverTimestamp, query, getDocs } from 'firebase/firestore';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const colRef = collection(firebase, 'blogs');
  const q = query(colRef, orderBy('createdAt'));

  const retrieveBlogs = async () => {
    const snapshot = await getDocs(colRef);
    const blogData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setBlogs(blogData);
    console.log(blogData);
  }

  const addBlog = async () => {
    const newBlog = await addDoc(colRef, {
      title: title,
      blog: text,
      createdAt: serverTimestamp()
    })
    setText("");
    setTitle("");
    setIsOpen(false);
    retrieveBlogs();
  }

  useEffect(() => {
    retrieveBlogs();
  }, [])

  return (
    <div className='full-container'>
      <Navigation/>
      <div className='practice-container'>
        {blogs.map((entry, index) => {
          return (
            <div className='practice' key={index}>
              <h1 className='blog-title'>{entry.title}</h1>
              <div className='blog-entry'>
                <p className='blog-text'>
                  {entry.blog}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title={title} setTitle={setTitle} setText={setText} text={text} addBlog={addBlog}/>
      <button className='add-blog-button' onClick={() => setIsOpen(true)}>+</button>
    </div>
  )
}

export default App;
