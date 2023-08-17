import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import Navbar from '../../components/navbar';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default ProfilePage;