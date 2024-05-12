import React, { useEffect, useState } from 'react';


const PhoneFrame = ({ iframe }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1 relative">
                        <div className="relative z-20">
                            {iframe}
                        </div>
                        {loading ? null : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-pulse bg-base-100 h-full w-full absolute "></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-24 bg-primary"></div>
        </div>
    );
};

export default PhoneFrame;
