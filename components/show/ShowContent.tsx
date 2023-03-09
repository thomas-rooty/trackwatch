import styles from './show.module.css';
import { Show } from '@/types/show.interface';

const ShowContent = ({ show }: { show: Show }) => {
  return (
    <div className={styles.showContent}>
      <h1>Show Details</h1>
    </div>
  );
};

export default ShowContent;
