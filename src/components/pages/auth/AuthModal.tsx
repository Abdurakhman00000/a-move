"use client"

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useAuthStore } from '@/store/useAuthStore';
import scss from "./AuthModal.module.scss";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const AuthModal = () => {
  const { data: session } = useSession();
  const { isOpen, closeModal } = useAuthStore();

  if (!isOpen) return null; 

  return (
    <div className={scss.modal}>
      <div className={scss.modalContent}>
        <button onClick={closeModal} className={scss.closeButton}>X</button>
        {session ? (
          <div className={scss.userInfo}>
            <img width={50} height={50} style={{ borderRadius: '50%' }} src={session.user?.image || ''} alt="" />
            <h1>{session.user?.name}</h1>
            <p>{session.user?.email}</p>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <div className={scss.Login}>
            <div className={scss.login_info}>
              <BiSolidMoviePlay/>
              <h2>A move</h2>
            </div>
            <h2>Hello</h2>
            <button onClick={() => signIn('google')}><FcGoogle/> Sign in with Google</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
