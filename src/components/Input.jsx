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
                    className='inline-block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200'>
                        {label}
                </label>
                }

                <input type={type}
                className={`${className} px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent duration-200 border border-gray-300 dark:border-gray-600 w-full shadow-sm hover:shadow-md transition-all placeholder-gray-400 dark:placeholder-gray-400`}
                ref={ref}
                {...props}
                id={id} />
            </div>
        )
    }
)

export default Input