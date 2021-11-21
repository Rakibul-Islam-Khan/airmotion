import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    useEffect(()=>{
        fetch(`https://safe-harbor-94419.herokuapp.com/users/${users.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[users.email])

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed();
    }, []);

    const createNewUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUsers(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                history.replace('/');
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                console.log(error.message);
            }).finally(() => setIsLoading(false));
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://safe-harbor-94419.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        users,
        admin,
        isLoading,
        createNewUser,
        loginUser,
        setUsers,
        saveUser,
        setIsLoading,
        signInWithGoogle,
        logOut,
    }
};

export default useFirebase;