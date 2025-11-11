import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const AllFoods = () => {

    const {loader} = use(AuthContext)
    
        if (loader) {
        return (
          <div className="h-[100vh] flex justify-center items-center">
            <span className="loading loading-infinity size-20"></span>
          </div>
        );
    }
    return (
        <div>
            i am all
        </div>
    );
};

export default AllFoods;