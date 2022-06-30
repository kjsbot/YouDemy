import '../styles/input.css';

import { FaArrowRight } from 'react-icons/fa';

type Props = {
    url: string,
    handleInputChange: any,
    submitForm: any,
};

const InputField = ({url, handleInputChange, submitForm}: Props) => {
    return (
        <form className='new-form' autoComplete="off" onSubmit={submitForm}>
            <input 
                className="input-box" 
                type="url" 
                placeholder="What do you want to learn?" 
                required
                onChange={handleInputChange}
                value={url}
            />
            <button className="input-btn" type="submit">
                <FaArrowRight />
            </button>
        </form>
    );
};

export default InputField;