import { createContext, useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import FeedbackData from '../data/FeedbackData.data';
const FeedbackContext = createContext() 

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState(FeedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //DeleteFeedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
    }}
    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }   

    //Update feedback item
    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updateItem }: item))
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>{children}</FeedbackContext.Provider>

}

export default FeedbackContext