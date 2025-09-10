import React, { forwardRef, useId } from 'react'

const Input = forwardRef(
    function Input({
        label,
        type = "text",
        className = "",
        ...props
    }, ref) {
        const id = useId()

        return (
            <div className='w-full'>
                {label && <label
                    htmlFor= {id}
                    className='inline-block mb-2 text-sm font-medium text-gray-700'>
                        {label}
                </label>
                }

                <input type={type}
                className={`${className} px-4 py-3 rounded-lg bg-white text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent duration-200 border border-gray-200 w-full shadow-sm hover:shadow-md transition-all`}
                ref={ref}
                {...props}
                id={id} />
            </div>
        )
    }
)

export default Input