import PropTypes from 'prop-types';
import cl from './style.module.scss';

export default function PointItem({ id, name, address, ownerAddress }) {
  return (
    <div className={cl.container}>
      <div>
        <div className={cl.imgContainer}>
          <img src="/images/location.svg" alt="" />
        </div>
        <div className={cl.content}>
          <div>
            <p>
              <span>ID:</span>
              <span>{id}</span>
            </p>
            <p>
              <span>Name:</span>
              <span>{name}</span>
            </p>
          </div>
          <div>
            <p>
              <span>Owner address:</span>
              <span>{ownerAddress}</span>
            </p>
          </div>
          <div>
            <p>
              <span>Address:</span>
              <span>{address}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

PointItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  ownerAddress: PropTypes.string.isRequired,
};
