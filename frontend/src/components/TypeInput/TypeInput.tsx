import React from 'react';

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    type: string
}
export const TypeInput:React.FC<InputProps> = ({onChange, type})=> {

    const useInput = (type: string) => {
        const [value, setValue] = React.useState("");
        const input = <input value={value} onChange={e => {setValue(e.target.value); onChange(e)}} type={type} />;
        return [value, input];
    }

    const [value, input] = useInput(type);

    return (<>
    {input}
    </>);
}