import React from 'react'

export function Card({ className, ...props }) {
    return <div className={`bg-white rounded-lg shadow ${className}`} {...props} />
}

export function CardHeader({ className, ...props }) {
    return <div className={`p-4 ${className}`} {...props} />
}

export function CardTitle({ className, ...props }) {
    return <h3 className={`text-lg font-medium ${className}`} {...props} />
}

export function CardContent({ className, ...props }) {
    return <div className={`p-4 pt-0 ${className}`} {...props} />
}