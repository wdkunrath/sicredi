import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReplyIcon from '@material-ui/icons/Reply';
import { historyObj } from '@services';

const useStyles = makeStyles(() => ({
  card: {
    width: '80%',
    minWidth: 300,
    maxWidth: 600,
    padding: 24,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  uppetText: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    minWidth: 150,
  },
  button: {
    marginTop: 30,
    padding: 18,
  },
}));

function goBack() {
  historyObj.routeDefiner();
}

export function NotFound() {
  const { card, uppetText, cardContent, button } = useStyles();

  return (
    <Card className={card}>
      <CardContent className={cardContent}>
        <div className={uppetText}>
          <div>
            <h1>404</h1>
            <h3>Página não encontrada</h3>
          </div>
        </div>
        <Button
          className={button}
          color="primary"
          size="large"
          startIcon={<ReplyIcon />}
          variant="contained"
          onClick={goBack}
        >
          Retornar à página principal
        </Button>
      </CardContent>
    </Card>
  );
}