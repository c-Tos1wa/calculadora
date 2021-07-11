import { Button, ButtonGroup, Container, Grid, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'
import Footer from '../components/footer'
import styles from '../styles/conversor.module.scss'


export default function Conversor(){
  const [ degree, setDegree ] = useState(0);
  const [ result, setResult ] = useState(0);
  const [ answer, setAnswer ] = useState(0);

  function celsiusToF() {
    const calc = degree*1.8 + 32
    setResult(Number(calc.toFixed(2)));
  }

  function celsiusToK(){
    const conv = degree + 273
    setAnswer(Number(conv.toFixed(2)));
  }

    return (
      <>
      <div className={styles.header}>
        <Container fixed>
          <Grid container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography className={styles.title}variant='h3'>
                Conversor de Temperatura
              </Typography>
              <Typography className={styles.subtitle}>
                Converta a temperatura de °C para °F ou para K.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img className={styles.image} 
                src='/images/termo.png' alt='Tirinha do Garfield'/>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.block}>
      <Container maxWidth="xs">
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <TextField
              label='Temperatura em °C'
              variant='filled'
              type='number'
              fullWidth
              onChange={ ({target}) => setDegree(Number(target.value)) }
            />
          </Grid>
          <Grid item>
            <ButtonGroup className={styles.actions}
              aria-label='outlined'>
                <Button className={styles.colorButton1} variant='contained' onClick={ () => celsiusToK() }> Kelvin (K)</Button>
                <Button className={styles.colorButton2} variant='contained' onClick={ () => celsiusToF() }> Fahrenheit (°F)</Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <div className={styles.result}>  
          <>
              <Typography><strong>Resultado:</strong> { result } °F</Typography>  
              
              <Typography><strong>Resultado:</strong> { answer } K</Typography>
            
          </> 
      
        </div>
      </Container>
    </div>
      <Footer />
    </>
  )
}
