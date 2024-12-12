import { useEffect, useState } from "react"
import PlusIcon from "./assets/plus.svg"
import CancelIcon from "./assets/cancel.svg"
import ErrorIcon2 from "./assets/error2.svg"
import ErrorDiv from "./ErrorDiv.jsx";



export default function AddTagsComponent() {

    const [tags, setTags] = useState("");
    const [tagsArray, setTagsArray] = useState([]);
    const [initialLoad, setInitialLoad] = useState(true)
    const maxTags = 8;
    const [showError, setShowError] = useState(false);
    const [emptyTag, setEmptyTag] = useState (false);

    
    // useEffect (() => {
    //     const savedTags = localStorage.getItem('TagsTodo')
    //     if(savedTags) {
    //         setTagsArray(JSON.parse(savedTags))
    //     }
    // })

    useEffect (() => {
        if (!initialLoad) {
            localStorage.setItem('TagsTodo', JSON.stringify(tagsArray))
        }

        setInitialLoad(false);
    }, [tagsArray])

    // if (tags.trim() && !tagsArray.includes(tags.trim())) {
    //     setTagsArray([...tagsArray, tags.trim()]);
    //     setTags('');lkkkk
    // }


    const addTags = (e) => {
        e.preventDefault()
        
        if (tagsArray.length >= maxTags) {
            // <div className="max-tags-message">
            //     <p>Maximun input of Tags reached</p>
            // </div>
            setShowError(true)
            
        } else {
            if (tags.trim() !== "") {
                setTagsArray([...tagsArray, tags.trim()])
            setTags('')
            setEmptyTag(false)
            } else {
                setEmptyTag(true)
            }
    
        }
        
    }

    const deletetag = (index) => {
        setTagsArray(tagsArray.filter((_, ind) => 
            ind !== index))
        setShowError(false)
    }

  return (
    <div className="">
        <form action="" onSubmit={addTags}>
        <div className="input-div">
            <label>Add Tags<span>(max.8)</span>
            <img src={ErrorIcon2} alt="ErrorIcon" />
            </label>
            <div className="input-space">
                <input type="text" 
                id= "tagInput"
                placeholder="Add tags..."
                className="tagInput"
                name="tagInputname"
                value= {tags}
                onChange = {((e) => setTags(e.target.value))} 
                />

                <div className="submit-btn-div">
                    <button type= 'submit'><img src={PlusIcon} alt="Plus" /></button>
            </div>
            </div>
        </div>
        </form>

        {showError && (
                    <div className="max-tags-error">
                        <p>Maximum number of tags reached</p>
                    </div>
        )}

        {emptyTag && (
                    <div className="empty-tags">
                        <p>Empty tags can't be added</p>
                    </div>
        )}



        <div className="tag-container">
        {tagsArray.map ((tags, index) => (
            <div key={index} className="tag-div">
                <p>{tags}</p>
                <div className="delete-btn">
                    <button onClick={()=> deletetag(index)}><img src={CancelIcon} alt="cancel" /></button>
                </div>
            </div>
        ))}
        </div>

        

        <form action="" className="access-form">
            <p>Members with access</p>
            <div className="overall-input-div">
                <div className="checkbox-div">
                    <input type="checkbox" />
                    <label htmlFor="option1">Display on profile</label>
                    <div className="new-div">NEW</div>
                </div>
                <div className="checkbox-div">
                    <input type="checkbox" />
                    <label htmlFor="option2">Disable commenting</label>
                </div>
            </div>

        </form>
    </div>
  )
}

// Please God, Send me my ddaily bread
