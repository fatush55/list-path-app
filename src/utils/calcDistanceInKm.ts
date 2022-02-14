import { KILOMETER } from 'constants/map';

export default (value: number) => (value / KILOMETER).toFixed(1);
