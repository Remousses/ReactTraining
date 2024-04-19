import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function Ajax1() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = () => {
      // Avec fetch pour les puristes
      // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      //   .then(response => setUsers(response));
  
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => setUsers(response.data));
    };
  
    return (
        <>
            <App />
            <ul>
                {users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
      
    );
}

function App() {
    return (
      <div>
        <p>Voici un exemple où on va récupèrer des données sur une API en AJAX</p>
  
        <p>Créer un composant Posts qui va chercher des articles sur https://jsonplaceholder.typicode.com/posts</p>
        <p>Ajouter un bouton dans ce composant qui va chercher à nouveau les articles et les ajoute à la liste (Peu importe si on a des doublons)</p>
  
        <p>Créer un composant Cats qui va afficher 10 images aléatoires de chats avec l'API https://developers.thecatapi.com</p>
  
        <p>Créer un composant Photos qui va chercher des images sur https://jsonplaceholder.typicode.com/photos</p>
        <p>Attention, on limitera le nombre de résultats à 10 par défaut (sur les 5000)</p>
        <p>Ajouter un bouton dans ce composant qui va chercher les 10 prochaines photos et les ajoute à la liste</p>
        {/* <Posts />
        <Cats /> */}
        <Photos />
      </div>
    );
}

function Posts() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => {
            setLoading(false)
            setPosts(response.data)
        });
    }, []);

    const add = () => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
        .then(response => {
            console.log(response.data);
            setLoading(false)
            setPosts([
                ...posts,
                ...response.data
                ])
        });
    }

    // if (loading) {
    //     return <Loader />
    // }

    return (
        <>
            <ul>
            {posts.map((post) => 
                    <li key={post.id}>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                    </li>
            )}
            </ul>
            <button onClick={add}>Add</button>
        </>
        
    );
}

function Cats() {
    const [loading, setLoading] = useState(false);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => {
            setLoading(false)
            setCats(response.data)
        });
    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <ul>
            {cats.map((cat) => 
                    <li key={cat.id}>
                        <img src={cat.url} title={cat.title} height='50px'/>
                    </li>
            )}
            </ul>
        </>
        
    );
}

let nextPage = 1;
function Photos() {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4')
        .then(response => {
            setLoading(false)
            setPhotos(response.data)
        });
    }, []);

    const add = () => {
        nextPage++
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4&_page=' + nextPage)
        .then(response => {
            console.log(response.data);
            setLoading(false)
            setPhotos([
                ...photos,
                ...response.data
                ])
        });
    }

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <ul>
            {photos.map((photo) => 
                    <li key={photo.id}>
                        <img src={photo.url} title={photo.title} height='50px'/>
                    </li>
            )}
            </ul>
            <button onClick={add}>Add</button>
        </>
        
    );
}