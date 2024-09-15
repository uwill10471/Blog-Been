import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form';


export default function RTE({name,control,label,defaultValue =""}) {
  return (
    <>
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller 
        name={name || "content"}
        control = {control}
        render={({field: {onChange}})=> (
            <Editor 
            apiKey='2j3zje9zt1kzrw9x1icb484x5nozxd9e7sdhswvaviq40lwc'
            initialValue={defaultValue}
            init={
                {   initialValue: defaultValue,
                    height:500,
                    menubar:true,
                    plugins: [
                        'advlist autolink lists image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                    'undo redo | formatselect | bold italic underline |\
                    alignleft aligncenter alignright alignjustify |\
                    bullist numlist outdent indent | removeformat | help',
                    content_style: "body { font-family:Helvetica, Arial, sans-serif; font-size:14px}"
                }
            }
            onEditorChange={onChange}
            />
        )} //onChane is used to know if anythin is changed in the field
        />
    </div>
    </>
  )
}


