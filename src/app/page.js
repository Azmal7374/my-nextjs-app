import Counter from '@/components/Counter/Counter';
import React from 'react';
const HomePage = () => {
  // console.log("Hello World")
  
  return (
    <div>
      <h1 className='text-4xl text-center mt-4'>Welcome to nextjs HomePage</h1>
      <h1 className='text-4xl text-center mt-4'>React Server Components</h1>
      <Counter/>
    </div>
  );
};

export default HomePage;