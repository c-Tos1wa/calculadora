import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Button, ButtonGroup, Container, Grid, TextField, Typography } from '@material-ui/core'
import styles from '../styles/conversor.module.scss'


export default function Conversor() {
  const [degree, setDegree] = useState(0);
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState(0);

  function celsiusToF() {
    const calc = degree * 1.8 + 32
    setResult(Number(calc.toFixed(2)));
  }

  function celsiusToK() {
    const conv = degree + 273
    setAnswer(Number(conv.toFixed(2)));
  }

  return (
    <>
      <div className={styles.header}>
        <Header
          title='Conversor de Temperatura'
          subtitle='Converta a temperatura de °C para °F ou para K.'
          image='/images/quenteFrio.jpg'
          altName='Um termometro mostrando altas temperaturas e um homem com roupas de verão 
          e outro mostrando baixas temperaturas, enquanto um homem veste roupas de frio'
        />
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
                onChange={({ target }) => setDegree(Number(target.value))}
              />
            </Grid>
            <Grid item>
              <ButtonGroup className={styles.actions}
                aria-label='outlined'>
                <Button className={styles.colorButton1} variant='contained' onClick={() => celsiusToK()}> Kelvin (K)</Button>
                <Button className={styles.colorButton2} variant='contained' onClick={() => celsiusToF()}> Fahrenheit (°F)</Button>
              </ButtonGroup>
            </Grid>
          </Grid>

          <div className={styles.result}>
            <>
              <Typography><strong>Resultado:</strong> {result} °F</Typography>

              <Typography><strong>Resultado:</strong> {answer} K</Typography>
            </>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}
