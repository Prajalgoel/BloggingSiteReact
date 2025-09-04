import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({
    name,
    control,
    label,
    defaultValue = ""
}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor="">{label}</label>}

            {/* passes the control of this rte to place where it gets called */}
            <Controller
                name={name || "content"}
                control={control}
                rules={{ required: "Content is required" }}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        apiKey="gpawdof71d26docchpy0yawt1khmiygawku32mc48p5kqdn0"
                        initialValue={defaultValue}
                        value={value || defaultValue}
                        init={{
                            height: 500,
                            menubar: false,
                            branding: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            promotion: false,
                            statusbar: false,
                            setup: function(editor) {
                                editor.on('init', function() {
                                    if (defaultValue) {
                                        editor.setContent(defaultValue);
                                    }
                                });
                            }
                        }}
                        onEditorChange={(content) => {
                            console.log("📝 Editor content changed:", content);
                            onChange(content);
                        }}
                    />

                )}
            />

        </div>
    )
}

export default RTE