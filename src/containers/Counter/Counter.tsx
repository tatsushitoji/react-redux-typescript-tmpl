import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../stores/';
import {
  incrementAmount,
  decrementAmount,
  asyncIncrementAmount,
} from '../../modules/counter';
import { head } from '../../components/hocs/head';
import {
  Counter as CounterComponent,
  Props,
} from '../../components/pages/Counter';

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (_: React.SyntheticEvent) => dispatch(incrementAmount(3)),
  decrement: (_: React.SyntheticEvent) => dispatch(decrementAmount(2)),
  asyncIncrement: (_: React.SyntheticEvent) =>
    dispatch(asyncIncrementAmount(5)),
});

export const Counter = compose<Props, { store?: unknown }>(
  head('Counter'),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CounterComponent);
