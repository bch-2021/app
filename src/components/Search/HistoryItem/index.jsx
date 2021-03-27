import PropTypes from 'prop-types';
import { getTypeAliasByNumber, getTypeImageByNumber } from 'helpers/helper';
import cl from './style.module.scss';

export default function HistoryItem({ date, type, point }) {
  const typeLocal = getTypeAliasByNumber(type);
  const typeImg = getTypeImageByNumber(type);

  return (
    <div className={`${cl.container} ${cl[typeLocal]}`}>
      <div>
        <div className={cl.imgContainer}>
          <img src={typeImg} alt="" />
        </div>
        <div className={cl.content}>
          <div>
            <p>
              <span>Date:</span>
              <span>{date}</span>
            </p>
            <p>
              <span>Type:</span>
              <span>{typeLocal}</span>
            </p>
          </div>
          <div>
            <p>
              <span>Point:</span>
              <span>{point}</span>
            </p>
          </div>
        </div>
      </div>

      <div className={cl.line}>
      </div>
    </div>
  );
}

HistoryItem.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  point: PropTypes.string.isRequired,
};
