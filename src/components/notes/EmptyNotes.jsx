import { LightbulbOutlined as Lightbulb } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material"

const Light = styled(Lightbulb)`
    font-size: 120px;
    color: #f5f5f5;
`

const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px;
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 23vh;
`

const EmptyNotes = () => {
  return (
    <Container>
        <Light />
        <Text>Notes you add appear here</Text>
    </Container>
    )
}

export default EmptyNotes