import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout';
import cl from './style.module.scss';

export default function Serials() {
  useEffect(() => {
    console.log('Here');
    axios({
      method: 'get',
      url: 'https://event.meraan.com/api/graphql',
      headers: {
        'Content-Type': 'text/event-stream',
      },
    }).then((res) => {
      console.log(res);
    });
  });

  return (
    <Layout>
      <div className={cl.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <span>List of valid points</span>
          </Grid>
          {/*<Grid item xs={12}>*/}
          {/*  <span>Create new point</span>*/}
          {/*</Grid>*/}
        </Grid>
      </div>
    </Layout>
  );
}
