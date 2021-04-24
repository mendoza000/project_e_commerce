import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container_title: {
    marginTop: 15,
    marginBottom: "15px",
    paddingBottom: 5,
    fontSize: 35,
    borderBottom: '1.5px solid #387c6d', 
    display: "flex",
    justifyContent: "space-between"
  },
  title:{
    fontSize: 32
  },
  emptyButton: {
    minWidth: '150px',
    border: "2px solid #387c6d",
    backgroundColor: "transparent",
    color:"#387c6d",
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    backgroundColor: "#387c6d",
    color:"#f8f5f1",
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
