// @flow strict
import React from 'react';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Pubblicato {new Date(date).toLocaleDateString('it-IT', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
  </div>
);

export default Meta;
