import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`

const Note = ({ notes }) => {
  return (
    <>
        <StyledCard>
            <CardContent>
                <Typography>{notes.heading}</Typography>
                <Typography>{notes.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive 
                    fontSize='smail'
                    style={{marginLeft: 'auto'}}
                />
                <Delete 
                    fontSize='smail'
                />
            </CardActions>    
        </StyledCard>   
    </>
  )
}

export default Note