import { useState } from 'react';

export const useModal = ( initialValue = false ) => {
    const [isOpem, setIsOpem] = useState(initialValue);
    
    const openModal = () => {setIsOpem(true)};

    const closeModal = () => {setIsOpem(false)};

    return [ isOpem, openModal, closeModal ];
}