import Link from 'next/link'
import { Typography } from "@material-ui/core"
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core'
import { Container, Grid } from '@material-ui/core'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <Container fixed>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <img className={styles.image} src='/images/numeros.png' alt='Números em espiral' />
            <Grid item xs={12} sm={6}>
              <Typography className={styles.text}>
                Clique em um dos cartões e faça operações matemáticas, calcule o IMC ou converta temperaturas.
              </Typography>
            </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.list}>
        <Container maxWidth='xs'>
          <Grid container>
            <Grid item>
            <Link href='/calculadora'>
          <Card variant='outlined'>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='Imagem de uma calculadora desenhada'
                image='/images/calculator.jpg'
                title=''
              />
            <CardContent>
              <a>Calculadora</a>
            </CardContent>
            </CardActionArea>
          </Card>
        </Link>

      <Link href='/imc'>
        <Card variant='outlined'>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='balança'
              image='/images/imc.jpg'
              title=''
            />
          <CardContent>
            <a>Calculadora de IMC</a>
          </CardContent>
          </CardActionArea>
        </Card>
    </Link>

      <Link href='/conversor'>
        <Card variant='outlined'>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='termometro'
              image='/images/termometro.jpg'
              title=''
            />
            <CardContent>
              <a>Conversor de Temperatura</a>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
            </Grid>
          </Grid>
        </Container>
      </div>          
    </>    
  )
}
