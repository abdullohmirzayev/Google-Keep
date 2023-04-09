import { createContext, useState } from "react"

export const DataContext = createContext(null)

const DataPrawer = ({children}) => {

    const [notes, setNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deletedNotes,
            setDeletedNotes,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataPrawer