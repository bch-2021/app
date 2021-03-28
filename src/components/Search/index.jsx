import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import Layout from '../Layout';
import Input from '../../elements/Input';
import Button1 from '../../elements/Button1';
import cl from './style.module.scss';
import HistoryItem from './HistoryItem';
import Web3Handler from '../../helpers/web3';
import { hasSerialNumber } from '../../helpers/helper';

export default function Search() {
  const [searchNumber, setSearchNumber] = useState('');
  const [productTransfers, setProductTransfers] = useState([]);

  const [results, setResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const web3Handler = new Web3Handler();

  useEffect(async () => {
    const resultsL = [];
    for (let i = 0; i < productTransfers.length; i++) {
      const isExist = await hasSerialNumber(searchNumber, productTransfers[i].link);
      if (isExist) {
        const point = await web3Handler.getPointInfo(productTransfers[i].pointId);
        productTransfers[i].point = `${point.name}, ${point.pointAddress}`;
        resultsL.push(productTransfers[i]);
      }
    }

    setResults(resultsL);
  }, [productTransfers]);

  const submit = async () => {
    const [batchNumberL] = searchNumber.split('-');
    setIsSearched(true);
    web3Handler.setProductTransferByBatchNumber(setProductTransfers, batchNumberL);
  };

  const renderText = () => {
    if (isSearched && results.length > 0) {
      return 'Tracking history';
    }
    if (isSearched && results.length === 0) {
      return 'No result for selected serial number';
    }
    return '';
  };
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
            <span>{renderText()}</span>
            <div>
              {results.map((history, key) => (
                <HistoryItem key={key} date={history.date} type={history.type} point={history.point} />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
