import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const FoodDetails = () => {

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
            fooddet
        </div>
    );
};

export default FoodDetails;