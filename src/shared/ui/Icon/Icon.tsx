'use client';

import React from 'react';

interface IconProps {
    name: string;
    size?: number;
    className?: string;
}

const Icon = ({name, size = 24, className = ''}: IconProps) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
        src={`/icons/${name}.svg`}
        alt={name}
        className={`${className}`}
        width={size}
        height={size}
        style={{ border: "none" }} 
        loading="eager" 
    />
);

export default React.memo(Icon);
