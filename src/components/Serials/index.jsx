import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Layout';
import cl from './style.module.scss';
import Web3Handler from '../../helpers/web3';

export default function Serials() {
  const [batchGroup, setBatchGroup] = useState([]);
  const [serials, setSerials] = useState([]);

  const web3Handler = new Web3Handler();

  useEffect(async () => {
    await web3Handler.setProductTransferAll(setBatchGroup);
  }, []);

  useEffect(async () => {
    const serialsData = [];

    // const serials = await axios({ method: 'get', url: transfer.link });
    batchGroup.forEach((data) => {
      data.productTransfers.forEach((productTransfer) => {
        if (productTransfer.type === '0') {
          serialsData.push({ batchNumber: data.batchNumber, link: productTransfer.link });
        }
      });
    });

    for (let i = 0; i < serialsData.length; i++) {
      const resp = await axios({ method: 'get', url: serialsData[i].link });
      const newSerials = resp.data;
      serialsData[i] = { ...serialsData[i], serials: newSerials };
    }

    setSerials(serialsData);
  }, [batchGroup]);

  return (
    <Layout>
      <div className={cl.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <span>List of valid points</span>
          </Grid>
          {serials.map((data, key1) => (
            <Grid key={key1} item xs={3} className={cl.numbers}>
              <p>Serials for batch number - {data.batchNumber}</p>
              <div className={cl.list}>
                {data.serials.map((serail, key2) => (
                  <div key={key2}>
                    <div />
                    <span>{serail}</span>
                  </div>

                ))}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
