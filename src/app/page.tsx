// pages/page.tsx
import React from 'react';
import Signup from '@/components/Signup';
import Community from '@/components/Community'
import Accounts from '@/components/Accounts';
import Investor from '@/components/Investor';

const Home: React.FC = () => {
    return (
        <div>
            <Signup />
            <Community/>
            <Accounts/>
            <Investor/>
        </div>
    );
};

export default Home;
