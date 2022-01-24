import { Button } from 'antd';
import React from 'react';
import { useAuth } from '../context/AuthProvider/useAuth';
import { ProtectedLayout } from './ProtectedLayout';
import {useNavigate} from "react-router-dom"

function Profile() {
    const navigate = useNavigate()
    const auth = useAuth()

    const logoutEvent = () => {
        auth.logout()
        navigate("/login")        
    }

  return (
      <ProtectedLayout>
          <>
            <h1>Esse é o componente Profile</h1>
            <Button type='primary' danger onClick={logoutEvent}>
                Logout
            </Button>
          </>
      </ProtectedLayout>
  );
}

export default Profile;
