/* import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; */

export const Helper = () => {
    const baseURLAPI = (url = '') => {
        url     = url.replace(/^[/]/g,'');
        const baseURL   = 'https://kompresi-sismul-orta27ik3q-et.a.run.app/api/';
        // const baseURL   = 'http://127.0.0.1:5000/api/';
        return baseURL + url;
    }

    return {
        baseURLAPI,
    }
};