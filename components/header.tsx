import { Container, Grid, Typography } from '@material-ui/core'
import styles from '../styles/header.module.scss'

interface HeaderProps{
  title: string;
  subtitle: string;
  image: string;
  altName: string;
}

export default function Header({
  title,
  subtitle,
  image,
  altName,
}:HeaderProps){
  return(
    <>
    <Container fixed>
    <Grid container justifyContent="center" alignItems="center" spacing={5}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h3" className={styles.title}>{title}</Typography>
        <Typography>{subtitle} </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img className={styles.image} src={image} alt={altName} />
      </Grid>
    </Grid>
  </Container>
  </>
  )
}