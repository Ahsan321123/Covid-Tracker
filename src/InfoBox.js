import React from 'react'
import { Card,CardContent,Typography } from '@mui/material';

function InfoBox({title,cases,total}) {
    return (
        <Card  className='InfoBox' >

         <CardContent>

        <Typography className='infoBox_title'  color='primary' >
        {title}
        </Typography>

        <h2 className='infoBox_cases' >{cases}</h2>
     
        <Typography  className='infoBox_total'   color='primary' >
            {total}Total
        </Typography>

        </CardContent >

        </Card>
    )
}

export default InfoBox
