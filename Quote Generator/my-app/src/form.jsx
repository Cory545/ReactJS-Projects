import './form.css';

function Form(){
    return(
    <div className='container'>
        <label>Title</label>
        <input type="text" id='titleInput' />
        <label>Description</label>
        <input type="text" id='descriptionInput'/>
        <button id='submitButton' onClick={log}>Submit</button>
    </div>
)};
function log(){
    console.log("Hello")
};
export default Form;