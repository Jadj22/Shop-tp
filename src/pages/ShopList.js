import React from 'react';
import ShopData from '../dataFiles/ShopData';
import { Card } from '../components';
import useTitle from '../hooks/useTitle';




const ShopList = () => {
    useTitle('Home');
  return (
    <main>
        <h1 className='text-center'>Bienvenue sur l'application Shop</h1>

        <div className='flex flex-wrap justify-center gap-4'>
            {
                ShopData.map((item) => (
                    <>
                        <Card key={item.id} image={item.image} nom={item.nom} prix={item.prix}/>
                    </>
                ))
            }
        </div>
    </main>
  )
}

export default ShopList
