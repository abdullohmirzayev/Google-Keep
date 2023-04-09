import { useState, useRef, useContext } from "react";

import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from 'uuid'

import { DataContext } from "../../context/dataContext";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 600px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    padding: 10px 15px;
    border-radius: 8px;
    border-color: #e0e0e0;
    margin: auto;
    min-height: 30px;
`

const note = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {

    const [shoxTextField, setShoxTextField] = useState(false);
    const [addNotes, setAddNotes] = useState({ ...note, id: uuid() })

    const { setNotes } = useContext(DataContext);

    const containerRef = useRef();

    const onTextAreaClick = () => {
        setShoxTextField(true);
        containerRef.current.style.minHeight = '70px'
    }

    const handleClickAway = () => {
        setShoxTextField(false);
        containerRef.current.style.minHeight = '30px'
        setAddNotes({ ...note, id: uuid() })

        if (addNotes.heading || addNotes.text) {
            setNotes(prevArr => [addNotes, ...prevArr]);
        }
    }

    const onTextChange = (e) => {
        const changeNote = { ...addNotes, [e.target.name]: e.target.value }
        setAddNotes(changeNote)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {shoxTextField &&
                    <TextField
                        placeholder="Title"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        name="heading"
                        value={addNotes.heading}
                    />
                }
                <TextField
                    placeholder="Take a note..."
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    onClick={onTextAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name="text"
                    value={addNotes.text}
                />

            </Container>
        </ClickAwayListener>
    )
}

export default Form