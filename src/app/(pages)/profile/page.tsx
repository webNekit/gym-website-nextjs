"use client";
import React, { useEffect } from 'react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

export default function page() {
  const { user } = useKindeBrowserClient();
  useEffect(() => {
      console.log(user);
  }, [user])
  return (
    <section className='w-full py-14'>
        <div className="container mx-auto">
            {user?.email}
            {user?.family_name}
            {user?.given_name}
        </div>
    </section>
  )
}
