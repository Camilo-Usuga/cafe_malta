import React from "react";


export interface ModalInterface {
    title: string;
    show: boolean;
    onClose: () => void;
    body: React.ReactNode;
    size: string;


}