import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import Input from 'elements/Input';
import Button1 from 'elements/Button1';
import Layout from '../Layout';
import cl from './style.module.scss';
import PointItem from './PointItem';
import Web3Handler from '../../helpers/web3';

export default function Points() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pointOwner, setPointOwner] = useState('');

  const [points, setPoints] = useState([]);

  const web3Handler = new Web3Handler();

  useEffect(async () => {
    await web3Handler.setPoints(setPoints);
  }, []);

  const submit = async () => {
    if (name.length === 0 || address.length === 0 || pointOwner.length === 0) {
      console.log('Invalid data');
      return;
    }

    web3Handler.createPoint(name, address, pointOwner);
  };

  return (
    <Layout>
      <div className={cl.container}>
        <Grid container spacing={2}>
          <Grid item xs={6} className={cl.itemContainer}>
            <span>List of active poins</span>
            {points.map((point, key) => (
              <PointItem
                key={key}
                id={point.id}
                name={point.name}
                address={point.pointAddress}
                ownerAddress={point.pointOwner}
              />
            ))}
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <span>Create new point</span>
              </Grid>
              <Grid item xs={12}>
                <Input name="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input name="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input
                  name="Point owner account address"
                  value={pointOwner}
                  onChange={(e) => setPointOwner(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <Button1 name="Create new" onClick={() => submit()} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
