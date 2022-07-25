import { useState } from 'react';
import axios, { Axios } from 'axios';
import '../styles/newcourse.css';

import InputField from '../components/InputField';

const NewCourse = () => {
    const [urlYT, setUrlYT] = useState<string>("");
    const key = "AIzaSyCeZzaajfxzuSxJwaSal_HeBuABhrrXvVU";
    const baseUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
    // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6&maxResults=50&key=AIzaSyCeZzaajfxzuSxJwaSal_HeBuABhrrXvVU

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setUrlYT(e.target.value);
    
    const validateUrl = (url: string): boolean => {
        return url.toLowerCase().includes("https://www.youtube.com/playlist?list=");
    };

    const getPlaylist = (playlistId: string) => {
        const reqUrl = `${baseUrl}?part=snippet&playlistId=${playlistId}&maxResults=50&key=${key}`

        axios.get(reqUrl)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    const submitForm = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (validateUrl(urlYT)) {
            const playlistId = urlYT.split('playlist?list=', 2)[1];
            getPlaylist(playlistId);
        } else { console.log("Not a Youtube playlist url!"); }

        setUrlYT("");
    };

    return (
        <div className='new-course-page'>
            <div className='new-search'>
                <h1>New <span className='accent'>Course</span></h1>
                <InputField url={urlYT} handleInputChange={handleInputChange} submitForm={submitForm} />
                <h5>Paste the url of a YouTube playlist</h5>
            </div>
        </div>
    );
};

export default NewCourse;