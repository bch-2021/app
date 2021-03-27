import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import Input from 'elements/Input';
import Button1 from 'elements/Button1';
import Layout from '../Layout';
import Select1 from '../../elements/Select1';
import Web3Handler from '../../helpers/web3';

export default function Transfer() {
  const [pointsContract, setPointsContract] = useState([]);
  const [points, setPoints] = useState([]);

  const [activePoint, setActivePoint] = useState('');
  const [activeType, setActiveType] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [link, setLink] = useState('');

  const web3Handler = new Web3Handler();

  const transferTypes = [
    { id: 0, label: 'Manufacturer' },
    { id: 1, label: 'Transportation' },
    { id: 2, label: 'Retail' },
  ];

  useEffect(async () => {
    await web3Handler.setPoints(setPointsContract);
  }, []);

  useEffect(async () => {
    const pointsL = [];
    pointsContract.forEach((point) => {
      pointsL.push({ id: point.id, label: point.name });
    });
    setPoints(pointsL);
  }, [pointsContract]);

  const submit = async () => {
    if (activePoint.length === 0 || activeType.length === 0 || batchNumber.length === 0 || link.length === 0) {
      console.log('Invalid data');
      return;
    }

    web3Handler.createPointTransfer(activePoint, link, activeType, batchNumber);
  };

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Input name="Batch number" value={batchNumber} onChange={(e) => setBatchNumber(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <Select1
            items={points}
            name="Select point"
            value={activePoint}
            onChange={(e) => setActivePoint(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Select1
            items={transferTypes}
            name="Select transfer type"
            value={activeType}
            onChange={(e) => setActiveType(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Input name="Link" value={link} onChange={(e) => setLink(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <Button1 name="Create transfer" onClick={() => submit()} />
        </Grid>
      </Grid>
    </Layout>
  );
}
