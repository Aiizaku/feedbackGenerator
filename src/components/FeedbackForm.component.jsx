import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect.component';
import FeedbackContext from '../context/FeedbackContext.context';


function FeedbackForm() {

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [rating, setRating] = useState(10);
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
     if(feedbackEdit.edit === true) {
         setBtnDisabled(false)
         setText(feedbackEdit.item.text)
         setRating(feedbackEdit.item.rating)
     }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') { 
            setBtnDisabled(true); 
            setMessage(null);
        }else if (text !== '' && text.trim().length < 10) {
            setBtnDisabled(true); 
            setMessage("Must be at least 10 characters");
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10 ) {
            const newFeedback = {
                text,
                rating,
            }
            if(feedbackEdit.edit === true){
                updateFeedback(
                    feedbackEdit.item.id, newFeedback)
                    feedbackEdit.edit = false;    
            } else {
           addFeedback(newFeedback);
            }
           setText('');
        
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>     
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
                    <Button isDisable={btnDisabled} type='submit'>Send</Button>
                </div>
                    {message && <div className='message'>{message}</div>}
            </form>        
        </Card>
    )
}

export default FeedbackForm;
