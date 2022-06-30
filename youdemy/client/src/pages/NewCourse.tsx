import { useState } from 'react';
import '../styles/newcourse.css';

import InputField from '../components/InputField';

const NewCourse = () => {
    const [urlYT, setUrlYT] = useState<string>("");
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setUrlYT(e.target.value);
    
    const validateUrl = (url: string): boolean => {
        return url.toLowerCase().includes("https://www.youtube.com/playlist?list=");
    };

    const getPlaylist = () => {
        console.log(urlYT);
    };
    
    const submitForm = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (validateUrl(urlYT)) {
            getPlaylist();
            // https://www.youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6
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