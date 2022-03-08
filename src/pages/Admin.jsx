import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';

import { db } from '.././firebase-config';
const Admin = () => {
  const [section, setSection] = useState([]);
  const sectionCollectionRef = collection(db, 'section1');
  useEffect(() => {
    const getSectionData = async () => {
      const data = await getDocs(sectionCollectionRef);
      setSection(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSectionData();
  }, []);

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      // console.log(error.message);
    }
  };
  console.log(section[0].title);
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div>
        {/* {section.map((el) => {
          return (
            <div key={el.id}>
              <h1>title : {el.title}</h1>
              <h1>subtitle : {el.subtitle}</h1>
              <h1>discription : {el.description}</h1>
              <h1>subtitle:{el.buttonLabel}</h1>
            </div>
          );
        })} */}
      </div>
      <div className="d-grid gap-2">
        <button onClick={handleLogout}>Log out</button>
      </div>
    </>
  );
};

export default Admin;
