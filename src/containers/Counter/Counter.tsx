import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../store';
import { incrementAmount, decrementAmount } from '../../modules/counter';
import { Counter } from '../../components/Counter';

const mapStateToProps = (state: State) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (_: React.MouseEvent) => dispatch(incrementAmount(3)),
  decrement: (_: React.MouseEvent) => dispatch(decrementAmount(2)),
});

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);