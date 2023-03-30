import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 mt-8'>
            <div className='container mx-auto md:grid grid-cols-3 text-white py-4'>
                <div>
                    <ul>
                        <li className='text-sm mb-2'>Discover</li>
                        <li className='text-xs mb-2'>Editor's Choice</li>
                        <li className='text-xs mb-2'>Curated Collections</li>
                        <li className='text-xs mb-2'>Popular Images</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-sm mb-2'>Community</li>
                        <li className='text-xs mb-2'>Blog</li>
                        <li className='text-xs mb-2'>Forum</li>
                        <li className='text-xs mb-2'>Creators</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-sm mb-2'>About</li>
                        <li className='text-xs mb-2'>About Us</li>
                        <li className='text-xs mb-2'>Privacy Policy</li>
                        <li className='text-xs mb-2'>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <p className='py-2 text-sm text-white text-center'>Design and Develop by <span className='font-semibold'>Mousumi</span></p>
            </div>
        </div>
    );
};

export default Footer;