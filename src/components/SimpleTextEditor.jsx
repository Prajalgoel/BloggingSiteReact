import React from 'react'
import { Controller } from 'react-hook-form'

function SimpleTextEditor({
    name,
    control,
    label,
    defaultValue = ""
}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor="">{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <textarea
                        value={value || defaultValue}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full h-64 px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 resize-vertical"
                        placeholder="Write your content here..."
                    />
                )}
            />
        </div>
    )
}

export default SimpleTextEditor
