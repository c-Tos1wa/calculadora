import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Grid, Container, Typography, Button, ButtonGroup, TextField } from "@material-ui/core";
import styles from '../styles/calculadora.module.scss'


export default function Calculator() {
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);
  const [ total, setTotal ] = useState(0);

  function Sum() {
    const sum = x + y
    return (setTotal(sum))
  }

  function Sub(){
    const subtract = x - y
    return (setTotal(subtract))
  }

  function Mult(){
    const mult = x * y
    return (setTotal(mult))
  }

  function Quoc(){
    return(setTotal(x/y))
  }

  return(
    <>
    <div className={styles.header}>
      <Header 
        title='Calculadora'
        subtitle='Simples para operações do cotidiano'
        image='./images/calculadora.jpg'
        altName='Mulher na frente de uma calculadora em pé'
      />
    </div>

    <div className={styles.calc}>
      <Container maxWidth='xs'>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <TextField
              label='Digite o valor de X'
              type='number'
              fullWidth
              onChange={ ( {target} ) => setX(Number(target.value)) }
            />
            <TextField
              label='Digite o valor de Y'
              type='number'
              fullWidth
              onChange={ ( {target} ) => setY(Number(target.value)) }
            />
          </Grid>
          <Grid>
            <ButtonGroup className={styles.buttons}
              aria-label='outlined'>
                <Button variant='contained' className={styles.unit} onClick = { () => Sum()}> + </Button>
                <Button variant='contained' className={styles.unit} onClick = { () => Sub()}> - </Button>
                <Button variant='contained' className={styles.unit} onClick = { () => Mult()}> * </Button>
                <Button variant='contained' className={styles.unit} onClick = { () => Quoc()}> / </Button>
              </ButtonGroup>
          </Grid>

      <div className={styles.total}>
        <Typography><strong>Total:</strong> {total} </Typography>
      </div>
      </Grid>
    </Container>
  </div>
    <Footer />
  </>
  )
}