import Grid from '@material-ui/core/Grid';
import {useState} from 'react';
import Layout from '../Layout';
import Input from '../../elements/Input';
import Button1 from '../../elements/Button1';
import cl from './style.module.scss';
import HistoryItem from './HistoryItem';
import Web3Handler from '../../helpers/web3';
import {hasSerialNumber} from "../../helpers/helper";

export default function Search() {
  const [searchNumber, setSearchNumber] = useState('');
  const [result, setResult] = useState([]);

  const web3Handler = new Web3Handler();

  const submit = async () => {
    const [
      batchNumber,
    ] = searchNumber.split('-');
    const data = (await web3Handler.searchByBatchNumber(batchNumber))
      .filter(hasSerialNumber(searchNumber));
    setResult(data.length > 0 ? data[0].history : []);
  };
  const isFound = result.length > 0 && searchNumber.length > 0;

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Input name="Serial number" value={searchNumber} onChange={(e) => setSearchNumber(e.target.value)} />
        </Grid>
        <Grid item xs={2}>
          <Button1 name="Search" onClick={() => submit()} />
        </Grid>
        <Grid item xs={12}>
          <div className={cl.history}>
            <span>{ isFound ? 'Tracking history' : ''}</span>
            <div>
              {result.map((history, key) => (
                <HistoryItem key={key} date={history.date} type={history.type} point={history.point}/>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
